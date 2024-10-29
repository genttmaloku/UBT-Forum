<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory; 

protected $fillable =[
    'user_id',
'username',
'image',
'birthdate',
'city',
'study_field',
'study_group',
'number',
'degree',
'bio'];

public function user()
{
    return $this->belongsTo(User::class);
}

public function posts()
{
    return $this->hasMany(Post::class);
}




}
