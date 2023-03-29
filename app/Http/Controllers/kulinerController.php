<?php

namespace App\Http\Controllers;

use App\Models\berita;
use Illuminate\Http\Request;

class kulinerController extends Controller
{
    public function index()
    {
        $berita3 = berita::where('kategori_id', 2)->limit(8)->orderBy('updated_at', 'desc')->get();
        $navbar1 = berita::where('status', 'diterima')->where('kategori_id', 1)->limit(5)->orderBy('view', 'desc')->get();
        $navbar2 = berita::where('status', 'diterima')->where('kategori_id', 3)->limit(5)->orderBy('view', 'desc')->get();
        $navbar3 = berita::where('status', 'diterima')->where('kategori_id', 4)->limit(5)->orderBy('view', 'desc')->get();
        $navbar4 = berita::where('status', 'diterima')->where('kategori_id', 5)->limit(5)->orderBy('view', 'desc')->get();
        $navbar5 = berita::where('status', 'diterima')->where('kategori_id', 2)->limit(5)->orderBy('view', 'desc')->get();
        return view('category.kuliner.index', [
            'berita3'=>$berita3,
            'navbar1' => $navbar1,
            'navbar2' => $navbar2,
            'navbar3' => $navbar3,
            'navbar4' => $navbar4,
            'navbar5' => $navbar5,
    
    ]);
    }
}
