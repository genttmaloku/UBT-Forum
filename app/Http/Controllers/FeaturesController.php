<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Feature;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redis;





class FeaturesController extends Controller
{
    public function index()
    {
       
        $cachedFeatures = Redis::get('cached_features');

        if (!$cachedFeatures) {
        
            $features = Feature::all();

       
            Redis::setex('cached_features', 3600, $features->toJson());
        } else {
            $cachedFeatures = json_decode($cachedFeatures);
            $features = collect($cachedFeatures);
        }

        $latestFeatures = Feature::latest()->get();

        if (!$features->isEmpty() && $latestFeatures->isNotEmpty()) {
            $latestFeatureId = $latestFeatures->first()->id;
            $lastCachedFeatureId = $features->last()->id;

            if ($latestFeatureId > $lastCachedFeatureId) {
               
                $features = Feature::all();
                Redis::setex('cached_features', 3600, $features->toJson());
            }
        }

        
        return Inertia::render('Admin/features', [
            'features' => $features,
        ]);
    }
    
    public function update(Request $request, $id)
    {
        $feature = Feature::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
        ]);


        $feature->update($validatedData);

        Redis::del('cached_features');
        return Redirect::route('features')->with('success', 'Feature updated successfully');;
    }
    public function destroy(String $id){
        $feature = Feature::findOrFail($id);
        $feature->delete();
    
        Redis::del('cached_features');
        return Redirect::route('features')->with('success', 'Feature deleted successfully');;
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
        ]);
    
        
        $userId = Auth::id();
    

        $validatedData['user_id'] = $userId;
    
        Redis::del('cached_features');
        Feature::create($validatedData);
    
       
        return Redirect::route('features')->with('success', 'Feature created successfully');;


}
}
