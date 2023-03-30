<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Komentar extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table='komentar';

    public function childs()
    {
        return $this->hasMany(Komentar::class, 'parent');
    }
    public function notifikasi()
    {
        return $this->hasMany(Notifikasi::class);
    }
}
