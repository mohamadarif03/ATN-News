<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class keywoard extends Model
{
    use HasFactory;

    protected $table = 'keywoard';
    protected $guarded = [];


    public function berita()
    {
        return $this->belongsTo(berita::class,'id');
    }
}

