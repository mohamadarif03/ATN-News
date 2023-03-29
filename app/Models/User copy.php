<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, CanResetPassword;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'email',
        'password',
        'cv',
        'status',
        'role_id',
        'ditolak',
        'foto'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // protected $attributes = [
    //     'role_id' => 2
    // ];
    public function Role(){
        return $this->belongsTo(Role::class);
    }

    public function berita()
    {
        return $this->hasMany(berita::class, 'penulis');
    }
    public function ditolak()
    {
        return $this->hasMany(berita::class, 'penulis')->where('status', 'ditolak');
    }

    public function diterima()
    {
        return $this->hasMany(berita::class, 'penulis')->where('status', 'diterima');
    }
}
