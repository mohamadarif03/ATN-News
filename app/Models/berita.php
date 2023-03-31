<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class berita extends Model
{
    use HasFactory;
    protected $fillable = ['penulis','editor', 'judul', 'isi', 'foto', 'kategori_id', 'status', 'ditolak', 'view', 'komentar', 'deskripsi', 'tag'];
    protected $table='berita';

    public function kategori()
    {
        return $this->BelongsTo(Kategori::class, 'kategori_id', 'id');
    }
    public function users()
    {
        return $this->BelongsTo(User::class, 'penulis', 'id');
    }
    public function tags()
    {
        return $this->hasMany(tag::class, 'berita_id', 'id');
    }
    public function keywoards()
    {
        return $this->hasMany(keywoard::class, 'berita_id', 'id');
    }

   

}
