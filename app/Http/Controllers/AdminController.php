<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Feature;
use App\Models\Post;
use App\Models\Activities;
use Barryvdh\DomPDF\Facade\Pdf;

class AdminController extends Controller
{
    public function show()
{

    $users = User::with('profile')->get();

    return Inertia::render('Admin/users', [
        'users' => $users,
    ]);
}


    public function destroy(String $id){
    $user = User::findOrFail($id);
    $user->delete();

    // Inertia approach:
    return Redirect::to('/users');
    }

    public function search(Request $request)
    {
        $query = $request->input('query');

        $users = User::where('name', 'like', "%$query%")
                     ->orWhere('email', 'like', "%$query%")
                     ->get();

          return Inertia::render('Admin/users', [
            'users' => $users
        ]);
    }

    public function getDataForDashboard()
    {
    // Total number of users
    $totalUsers = User::count();

    // Total number of features
    $totalFeatures = Feature::count();

    // The last added feature
    $lastFeature = Feature::latest()->first();

    // The latest 6 users
    $latestUsers = User::latest()->take(6)->get();

    $totalPosts = Post::count();

    $data = [
        'totalUsers' => $totalUsers,
        'totalFeatures' => $totalFeatures,
        'lastFeature' => $lastFeature,
        'latestUsers' => $latestUsers,
        'totalPosts' => $totalPosts,
    ];

    return Inertia::render('Dashboard', compact('data'));
}

public function filterUsers(Request $request)
{
    $filterType = $request->input('filter_type'); // Assuming 'filter_type' is the parameter indicating the filter type

    if ($filterType === 'latest') {
        $users = User::latest()->get();
    } elseif ($filterType === 'earliest') {
        $users = User::oldest()->get();
    } else {
        // Handle invalid or missing filter type
        return response()->json(['error' => 'Invalid filter type'], 400);
    }

    return Inertia::render('Admin/users', [
        'users' => $users
    ]);
}


public function showParticipants($id)
    {
       $activity = Activities::with('users')->findOrFail($id);

       return Inertia::render('Admin/Participators',
       ['activity' => $activity ]);
    }


    public function generatePdf($id)
    {
        $activity = Activities::with('users')->findOrFail($id);
        $pdf = PDF::loadView('participants', compact('activity'));
        $fileName = 'participants_' . $activity->title . '.pdf';
        return $pdf->download($fileName);

    }




    
}
