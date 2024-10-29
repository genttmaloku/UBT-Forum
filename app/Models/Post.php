<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable =[
    'username',
    'description',
    'image'
    ];


    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function profile()
    {
        return $this->belongsTo(Profile::class, 'username', 'username');
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }
    



}
