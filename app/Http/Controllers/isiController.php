<?php

namespace App\Http\Controllers;

use App\Models\berita;
use App\Models\Kategori;
use App\Models\User;
// use App\Models\users;
use Illuminate\Http\Request;

class isiController extends Controller
{
    public function index($id)
    {
        $ber = Kategori::all();
        $data = berita::with('users')->find($id);
        $penulis = User::all();
        $navbar1 = berita::where('status', 'diterima')->where('kategori_id', 1)->limit(5)->orderBy('view', 'desc')->get();
        $navbar2 = berita::where('status', 'diterima')->where('kategori_id', 3)->limit(5)->orderBy('view', 'desc')->get();
        $navbar3 = berita::where('status', 'diterima')->where('kategori_id', 4)->limit(5)->orderBy('view', 'desc')->get();
        $navbar4 = berita::where('status', 'diterima')->where('kategori_id', 5)->limit(5)->orderBy('view', 'desc')->get();
        $navbar5 = berita::where('status', 'diterima')->where('kategori_id', 2)->limit(5)->orderBy('view', 'desc')->get();


        return view('isi berita.index',[
            'ber'=>$ber,
            'data'=>$data,
            'penulis'=>$penulis,
            'navbar1' => $navbar1,
            'navbar2' => $navbar2,
            'navbar3' => $navbar3,
            'navbar4' => $navbar4,
            'navbar5' => $navbar5,
        ]);
    }
}
