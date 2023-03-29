<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class berita extends Model
{
    use HasFactory;
    protected $fillable = ['penulis','editor', 'judul', 'deskripsi', 'isi', 'foto', 'kategori_id', 'status', 'ditolak', 'view', 'komentar'];
    protected $table='berita';

    public function kategori()
    {
        return $this->BelongsTo(Kategori::class, 'kategori_id', 'id');
    }
    public function users()
    {
        return $this->BelongsTo(User::class, 'penulis', 'id');
    }
    
}