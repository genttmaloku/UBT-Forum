<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activities extends Model
{
    use HasFactory;

     protected $fillable =[
        'title',
        'city',
        'start_date',
        'end_date',
        'description',
        'category',
        'organizer',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }


}
