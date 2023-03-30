<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class notifikasi extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $table='notifikasi';

    public function user()
    {
        return $this->hasMany(User::class, 'id');
    }
    public function komentar()
    {
        return $this->hasMany(komentar::class, 'id');
    }

}
