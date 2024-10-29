<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Models\Like;
use App\Models\Profile;
use App\Models\User;
use App\Models\Feature;
use App\Models\Comment;
use Illuminate\Support\Facades\Redis;



class PostController extends Controller
{
    public function homePage()
{
    $cachedPosts = Redis::get('home_page_posts');
    $cachedFeatures = Redis::get('home_page_features');

    if ($cachedPosts) {
        $posts = json_decode($cachedPosts);
    } else {
        $posts = Post::with(['profile', 'likes'])
            ->withCount('likes')
            ->latest()
            ->take(10)
            ->get();

        Redis::setex('home_page_posts', 600, $posts->toJson());
    }

    if (!$cachedFeatures) {
        $features = Feature::latest()->take(3)->get();
        Redis::setex('home_page_features', 600, $features->toJson());
    } else {
        $cachedFeatures = json_decode($cachedFeatures);
        $features = collect($cachedFeatures);

        $latestFeatures = Feature::latest()->take(3)->get();

        if (!$features->isEmpty() && $latestFeatures->isNotEmpty()) {
            $latestFeatureId = $latestFeatures->first()->id;
            $lastCachedFeatureId = $features->last()->id;

            if ($latestFeatureId > $lastCachedFeatureId) {
                $features = Feature::latest()->take(3)->get();
                Redis::setex('home_page_features', 600, $features->toJson());
            }
        }
    }

    return Inertia::render('User/Home', [
        'posts' => $posts,
        'features' => $features,
    ]);
}
    public function postsPage()
    {
        $posts = Redis::get('posts_page_posts');

        if (!$posts) {
            $posts = Post::with(['profile', 'likes'])
                ->withCount('likes')
                ->take(10)
                ->get();
            Redis::setex('posts_page_posts', 600, $posts->toJson());
        } 
            $posts = json_decode($posts);
      

        return Inertia::render('User/Posts', [
            'posts' => $posts,
        ]);
    }

    public function store(Request $request)
{
    $validatedData = $request->validate([
        'description' => 'required|string',
        'image' => 'sometimes',
    ]);

    $user = Auth::user();
    $validatedData['username'] = $user->username;
    $filename = '';

    if ($request->hasFile('image')) {
        $filename = time() . '.' . $request->image->extension();
        $request->image->move(public_path('uploads'), $filename);
        $validatedData['image'] = 'uploads/' . $filename;
    }

    Post::create($validatedData);

    Redis::del('posts_page_posts');
    Redis::del('home_page_posts');

    notify()->success('Posted successfully!');
    return Redirect::route('user.home')->with('success', 'Post created successfully');
}

public function like(Post $post)
{
    $user = auth()->user();

    if ($post->likes()->where('user_id', $user->id)->exists()) {
        $post->likes()->where('user_id', $user->id)->delete();
    } else {
        $post->likes()->create(['user_id' => $user->id]);
    }

    $likesCount = $post->likes()->count();


    Redis::del('home_page_posts');
    Redis::del('posts_page_posts');
    
    Redis::setex("post_{$post->id}_likes_count", 600, $likesCount);

    return Redirect::back();
}

public function update(Request $request, $id)
{
    $user = Auth::user();
    $post = Post::findOrFail($id);

    $validatedData = $request->validate([
        'description' => 'required|string',
    ]);
    $validatedData['username'] = $user->username;

    $post->update($validatedData);

    
    Redis::del('home_page_posts');
    Redis::del('posts_page_posts');

    notify()->success('Post updated successfully!');
    return Redirect::route('user.posts')->with('success', 'Post updated successfully');
}

    public function destroy(String $id){
        $post = Post::findOrFail($id);
        $post->delete();

         Redis::del('home_page_posts');
        Redis::del('posts_page_posts');
    

        notify()->success('Post deleted successfully!');
        return Redirect::route('user.posts')->with('success', 'Post deleted successfully');;

       
    }


    public function search(Request $request)
    {
        $query = $request->input('query');

        if ($this->isValidQuery($query)) {

            $posts = Post::whereRaw("MATCH(description) AGAINST(? IN BOOLEAN MODE)", [$query])
                         ->withCount('likes')
                         ->get();
        } else {
            $posts = collect(); 
        }

        return Inertia::render('User/Posts', [
            'posts' => $posts,
        ]);
    }

    private function isValidQuery($query)
    {
 
        return strlen($query) >= 3 && ctype_alnum(str_replace(' ', '', $query));
    }

    public function commentPage(String $id){

        $post = Post::with(['profile', 'likes'])->findOrFail($id);
        $comments = Comment::with(['user.profile'])->where('post_id', $id)->get();

        return Inertia::render('User/Comments', [
            'post' => $post,
            'comments' => $comments,
        ]);
    }

    


}
