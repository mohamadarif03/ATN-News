<?php

namespace App\Models;

use App\Models\Role;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Aturan extends Model
{
    use HasFactory;

    protected $fillable = ['id','aturan', 'anggota'];
    protected $table = 'aturan';

    public function role()
    {
        return $this->belongsTo(Role::class, 'anggota', 'id');
    }
}
