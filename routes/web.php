<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\FeaturesController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\CommentController;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



 

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/users', [AdminController::class, 'show'])->name('users')->middleware('role');
    Route::delete('/users/{id}', [AdminController::class, 'destroy'])->middleware('role');
    Route::get('/dashboard', [AdminController::class, 'getDataForDashboard'])->name('dashboard')->middleware('role');
    Route::get('/features', [FeaturesController::class, 'index'])->name('features')->middleware('role');
    Route::put('/features/{id}', [FeaturesController::class, 'update'])->middleware('role');
    Route::delete('/features/{id}', [FeaturesController::class, 'destroy'])->middleware('role');
    Route::post('/features', [FeaturesController::class, 'store'])->name('features.store')->middleware('role');
    Route::get('/userdash', [ProfileController::class, 'dashboard'])->name('user.dashboard')->middleware('adminrole');
    Route::post('/profileform',[ProfileController::class,'create'])->name('create.profile')->middleware('adminrole');
    Route::put('/userdash', [ProfileController::class, 'updateProfile'])->name('profile.update')->middleware('adminrole');
    Route::get('/users/search', [AdminController::class, 'search'])->name('users.search');
    Route::get('/users/filter',[AdminController::class,'filterUsers'])->name('filter.users');
    Route::get('/profileform',[ProfileController::class,'profilePage'])->name('profile.form')->middleware('adminrole');
    Route::get('/profile/{username}', [ProfileController::class, 'viewProfile'])->name('profile.view')->middleware('adminrole');
    Route::get('/home', [PostController::class, 'homePage'])->name('user.home')->middleware('adminrole');
    Route::get('/posts',[PostController::class, 'postsPage'])->name('user.posts')->middleware('adminrole');
    Route::post('/home', [PostController::class, 'store'])->name('post.store')->middleware('adminrole');
    Route::post('/posts/{post}/like', [PostController::class, 'like'])->name('posts.like')->middleware('adminrole');
    Route::post('/posts/{post}/unlike', [PostController::class, 'unlike'])->name('posts.unlike')->middleware('adminrole');
    Route::put('/posts/{id}', [PostController::class, 'update'])->middleware('adminrole');
    Route::get('/posts/search', [PostController::class, 'search'])->name('posts.search');
    Route::delete('/posts/{id}', [PostController::class, 'destroy'])->middleware('adminrole');
    Route::get('/userslist', [ProfileController::class, 'viewProfiles'])->name('users.profile')->middleware('adminrole');
    Route::get('profiles/search', [ProfileController::class, 'search'])->name('profiles.search')->middleware('adminrole');
    Route::get('/comment/{id}', [PostController::class, 'commentPage'])->name('posts.comment')->middleware('adminrole');
    Route::post('/comment/{id}', [CommentController::class, 'store'])->name('posts.comment.store')->middleware('adminrole');
    Route::delete('/comment/{id}/{cid}', [CommentController::class, 'destroy'])->name('posts.comment.delete')->middleware('adminrole');
    Route::get('/activities',[ActivityController::class,'index'])->name('user.activities')->middleware('adminrole');
    Route::post('/activities/{activity}/participate', [ActivityController::class, 'participate'])->name('user.activities.participate')->middleware('adminrole');
    Route::get('/admin/activities', [ActivityController::class, 'adminIndex'])->name('admin.activities')->middleware('role');
    Route::post('/admin/activities', [ActivityController::class, 'store'])->name('admin.activities.store')->middleware('role');
    Route::put('/admin/activities/{id}', [ActivityController::class, 'update'])->name('admin.activities.update')->middleware('role');
    Route::delete('/admin/activities/{id}', [ActivityController::class, 'destroy'])->name('admin.activities.delete')->middleware('role');
    Route::delete('/admin/activities/{id}', [ActivityController::class, 'destroy'])->name('admin.activities.destroy')->middleware('role');
    Route::get('/admin/activities/{id}/participants', [AdminController::class, 'showParticipants'])->name('admin.activities.participants')->middleware('role');
    Route::get('/generate-pdf/{id}', [AdminController::class, 'generatePdf'])->name('generatePdf')->middleware('role');
    
    


});

require __DIR__.'/auth.php';
