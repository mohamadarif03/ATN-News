<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tag extends Model
{
    use HasFactory;
    protected $table = 'tag';
    protected $fillable = ['tag', 'berita_id'];

    public function berita()
    {
        return $this->belongsTo(berita::class,'id');
    }
}
