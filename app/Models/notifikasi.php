<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notifikasi extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $table='notifikasi';

    public function user()
    {
        return $this->hasMany(User::class, 'user_id');
    }
    public function komentar()
    {
        return $this->hasMany(komentar::class, 'komen_id');
    }

}
