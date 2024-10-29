<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:20|unique:'.User::class,
            'email' => 'required|string|lowercase|email|regex:/^[a-zA-Z0-9._%+-]+@ubt-uni\.net$/i|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            [
                'name.required' => 'The name field is required.',
                'username.required' => 'The username field is required.',
                'username.max' => 'The username must not be greater than 20 characters.',
                'username.unique' => 'The username has already been taken.',
                'email.required' => 'The email field is required.',
                'email.email' => 'The email must be a valid email address.',
                'email.regex' => 'The email must be a valid UBT email address.',
                'email.unique' => 'The email has already been taken.',
                'password.required' => 'The password field is required.',
                'password.confirmed' => 'The password confirmation does not match.',
             
            ]
        ]);

        
            

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('profile.form', absolute: false));
    }
}
