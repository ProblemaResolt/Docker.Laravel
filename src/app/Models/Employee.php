<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class Employee extends Model
{
    protected $table = 'employees';

    protected $fillable = [
        'first_name',
        'last_name',
        'age',
        'tell',
        'email',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}