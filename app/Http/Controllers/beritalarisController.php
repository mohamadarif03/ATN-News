<?php

namespace App\Http\Controllers;

use App\Models\berita;
use App\Models\Kontak;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class beritalarisController extends Controller
{
    public function index(Request $request)
    {
        $katakunci = $request->katakunci;
        $kontak = Kontak::all();
        $user = User::all();
        $berita = berita::where('judul', 'LIKE', '%'.$katakunci.'%')->where('status', 'diterima')->with('users')->orderBy('view', 'desc')->paginate(5);
        return view('admin.berita terlaris.index', ['kontak' => $kontak, 'berita' => $berita, 'user' => $user]);
    }
    public function terlaris(Request $request)
    {
        $katakunci = $request->katakunci;
        $kontak = Kontak::all();
        $user = User::all();
        $berita = berita::where('judul', 'LIKE', '%'.$katakunci.'%')
        ->where('penulis', Auth::user()->id)
        ->where('status', 'diterima')
        ->with('users')->orderBy('view', 'desc')->paginate(5);
        return view('penulis.terlaris.index', ['kontak' => $kontak, 'berita' => $berita, 'user' => $user]);
    }

    
}
