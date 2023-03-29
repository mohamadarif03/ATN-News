<?php

namespace App\Http\Controllers;

use App\Models\berita;
use App\Models\Kontak;
use App\Models\User;
use Illuminate\Http\Request;

class penulisviewController extends Controller
{
    public function index(Request $request)
    {
        $katakunci = $request->katakunci;

        $data = User::query()
        ->withCount('berita')
        ->where('username', 'LIKE', '%' . $katakunci . '%')
        ->where('role_id', 2)
        ->where('status', 'aktif')
        ->orderBy('berita_count', 'desc')
        ->paginate(5);
        $berita = berita::all();
        $kontak = Kontak::all();
        $user = User::where('role_id', 2)
        ->where('username', 'LIKE', '%'.$katakunci.'%')
        ->where('status', 'aktif')
        ->withSum('berita', 'view')
        ->orderByDesc('berita_sum_view')
        ->paginate(5);
        return view('admin.penulis view.index', ['kontak' => $kontak, 'user' => $user, 'berita', $berita]);
    }
}
