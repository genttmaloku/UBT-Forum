<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Comment;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function store(Request $request, $postId)
    {
        $request->validate([
            'content' => 'required|string|max:1000',
        ]);

        $post = Post::findOrFail($postId);
        $user = Auth::user();

        $comment = new Comment();
        $comment->post_id = $post->id;
        $comment->user_id = $user->id;
        $comment->content = $request->content;
        $comment->save();

        return redirect()->back();
    }

    public function destroy($id)
{
    $comment = Comment::findOrFail($id);

    if ($comment->user_id !== Auth::id()) {
        notify()->error('You are not authorized to delete this comment!');
        return redirect()->back();
    }

    $comment->delete();
   notify()->success('Comment deleted succesfully!');
   return redirect()->back();
}



}
