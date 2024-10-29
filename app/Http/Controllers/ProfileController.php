<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Profile;
use App\Models\Post;
use App\Models\Comment;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;


class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();
        

        return Redirect::route('profile.edit');
    }

   
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
    public function dashboard(){
        $user_id = Auth::id();
        $user = Auth::user();
        $profile = Profile::where('user_id', $user_id)->first();
        $postCount = Post::where('username', $user->username)->count();
        $commentCount = Comment::where('user_id', $user_id)->count();
      
 

        return Inertia::render('User/Dashboard',[
            'profile' => $profile,
            'postCount' => $postCount,
            'commentCount' => $commentCount
        ]);
    }


    public function updateProfile(Request $request)
    {
        $user = Auth::user();
        $profile = Profile::where('user_id', $user->id)->first();
    
        $validatedData = $request->validate([
            'birthdate' => 'sometimes',
            'city' => 'sometimes',
            'study_field' => 'sometimes',
            'study_group' => 'sometimes',
            'number' => 'sometimes',
            'degree' => 'sometimes',
            'bio' => 'sometimes',
            'image' => 'sometimes', 
        ]);
    
        if ($request->hasFile('image')) {
            $filename = $request->image->getClientOriginalName() . '.' . $request->image->extension();
            // Move the uploaded file
            $request->image->move(public_path('uploads'), $filename);
    
            $validatedData['image'] = 'uploads/' . $filename;
    
            if ($profile->image && file_exists(public_path($profile->image))) {
                unlink(public_path($profile->image));
            }
        }
    
        $profile->update($validatedData);
        return Redirect::route('user.dashboard')->with('success', 'Profile updated successfully');
    }





    public function profilePage()
    {
        
        $user_id = Auth::id();

        
        $profile = Profile::where('user_id', $user_id)->first();

        if($profile){
            return Redirect::route('user.dashboard');
        }else if(!$profile){
            return Inertia::render('User/ProfileForm');
            }
    }
       

    public function create(Request $request)
    {
        $userId = Auth::id();
        $username = Auth::user()->username;

       

        $validatedData = $request->validate([
            'user_id',
            'image' => 'required',
            'birthdate' => 'required|date',
            'city' => 'required|string',
            'study_field' => 'required|string',
            'study_group' => 'required|string',
            'number' => 'required|string',
            'degree' => 'required|string',
            'bio' => 'nullable|string',

        ]);

      

        $filename = '';

    if ($request->hasFile('image')) {
        $filename = time() . '.' . $request->image->extension();
        $request->image->move(public_path('uploads'), $filename);
        $validatedData['image'] = 'uploads/' . $filename;
    }
    


    $profile = Profile::create([
        'user_id' => $userId,
        'username' => $username,
        'image' => $validatedData['image'],
        'birthdate' => $validatedData['birthdate'],
        'city' => $validatedData['city'],
        'study_field' => $validatedData['study_field'],
        'study_group' => $validatedData['study_group'],
        'number' => $validatedData['number'],
        'degree' => $validatedData['degree'],
        'bio' => $validatedData['bio'],
]);
        return Redirect::route('user.dashboard');
    }

    public function viewProfile(String $username)
{
    
    $cachedProfile = Redis::get("profile_{$username}");
    $profile = Profile::where('username', $username)->first();
    $postCount = Post::where('username', $username)->count();
    $commentCount = Comment::where('user_id', $profile->user_id)->count();

    if (!$cachedProfile) {
        
        $profile = Profile::where('username', $username)->firstOrFail();

        
        Redis::setex("profile_{$username}", 600, $profile->toJson());
    } else {

        $profile = json_decode($cachedProfile);
    }

    return Inertia::render('User/Dashboard', [
        'profile' => $profile,
        'postCount' => $postCount,
        'commentCount' => $commentCount
    ]);
}

    public function viewProfiles(){

         
        $profiles = Profile::latest()->take(10)->get();
    
        return Inertia::render('User/Users', [
            'profiles' => $profiles
        ]);
        
    }


    public function search(Request $request)
    {
        $query = $request->input('query');

        if ($this->isValidQuery($query)) {
            
            $profiles = Profile::whereRaw("MATCH(username) AGAINST(? IN BOOLEAN MODE)", [$query])
                         ->get();
        } else {
            $profiles = collect(); 
        }

        return Inertia::render('User/Users', [
            'profiles' => $profiles,
        ]);
    }

    private function isValidQuery($query)
    {
        
        return strlen($query) >= 3 && ctype_alnum(str_replace(' ', '', $query));
    }



}
