<?php

namespace App\Http\Controllers;

use App\Models\berita;
use App\Models\Kategori;
use App\Models\penghargaan;
use App\Models\sosmed;
use Illuminate\Http\Request;

class searchController extends Controller
{
    public function index(Request $request)
    {
        $katakunci = $request->katakunci;
        $search = berita::where('status', 'diterima')
        ->where('judul', 'LIKE', '%'.$katakunci.'%')
        ->paginate(8)->withQueryString();
        $penghargaan = penghargaan::limit(3)->orderBy('created_at', 'desc')->get();
        $kategori = Kategori::limit(5)->orderBy('created_at', 'desc')->get();
        $kategori2 = Kategori::limit(10)->orderBy('created_at', 'desc')->skip(5)->get();
        $sosmed = sosmed::limit(1)->orderBy('updated_at', 'desc')->get();



        return view('search.index',[
        'penghargaan' => $penghargaan,
        'search' => $search,
        'kategori' => $kategori,
        'kategori2' => $kategori2,
        'sosmed' => $sosmed,
        ]);
    }
}
