<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Activities;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;

class ActivityController extends Controller
{
    public function index()
    {
         $activities = Activities::where('start_date', '>', now())->get();
        return Inertia::render('User/Activities', ['activities' => $activities]);
    }

    public function adminIndex(){
        $activities = Activities::all();
        return Inertia::render('Admin/Activities', ['activities' => $activities]);
    }

    public function store(Request $request)
{
    
    $validatedData = $request->validate([
        'title' => 'required|string',
        'city' => 'required|string',
        'start_date' => 'required|date',
        'end_date' => 'required|date',
        'description' => 'required|string',
        'category' => 'required|string',
        'organizer' => 'required|string',
    ]);

    
    Activities::create($validatedData);

    notify()->success('Event created successfully!');
    return Redirect::route('admin.activities');
}

public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'title' => 'required|string',
            'city' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'description' => 'required|string',
            'category' => 'required|string',
            'organizer' => 'required|string',
        ]);

        $activity = Activities::findOrFail($id);
        $activity->update($validatedData);

        notify()->success('Event updated successfully!');
        return Redirect::route('admin.activities');
    }

    public function destroy($id)
    {
        $activity = Activities::findOrFail($id);
        $activity->delete();
        
        notify()->success('Event deleted successfully!');
        return Redirect::route('admin.activities');
    }


    public function participate($id)
    {
        $activity = Activities::findOrFail($id); 
        $user = Auth::user();
    
        if (!$activity->users->contains($user->id)) {
            $activity->users()->attach($user->id);
    
            notify()->success('You are registered in this event!');
            return redirect()->back();
        }
    
        notify()->error('You are already participating in this event!');
        return redirect()->back();
    }

   


}
