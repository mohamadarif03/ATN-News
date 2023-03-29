<?php

namespace App\Http\Controllers;

use App\Charts\KategoriBerita;
use App\Charts\GrafikBeritasChart;
use App\Charts\penulisTerbanyak;
use App\Charts\tahunChart;
use App\Models\Aturan;
use App\Models\berita;
use App\Models\Kategori;
use App\Models\Kontak;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;

class dbadminController extends Controller
{
    public function index(KategoriBerita $kategoriBerita, GrafikBeritasChart $GrafikBeritasChart, tahunChart $tahunChart){
        $aturanCount = Aturan::count();
        $kategoryCount = Kategori::count();
        $userCount = User::where('status', 'aktif')->count();
        $beritaCount = berita::where('status', 'diterima')->count();
        $kontak = Kontak::all();
        return view('admin.dashboard.index', ['kontak' => $kontak,
        'aturanCount' => $aturanCount,
        'kategoryCount' => $kategoryCount,
        'userCount' => $userCount,
        'beritaCount' => $beritaCount,
        'KategoriBerita' => $kategoriBerita->build(),
        'GrafikBeritasChart' => $GrafikBeritasChart->build(),
        'tahunChart' => $tahunChart->build(),
        ]);
    }
    public function dashboard(Request $request){
        $beritaCount = berita::where('penulis', Auth::user()->id)->count();
        $beritasetuju = berita::where('penulis', Auth::user()->id)
        ->where('status', 'diterima')
        ->count();
        $beritatolak = berita::where('penulis', Auth::user()->id)
        ->where('status', 'ditolak')
        ->count();

        $katakunci = $request->katakunci;
        $kontak = Kontak::all();
        $user = User::all();
        $berita = berita::where('judul', 'LIKE', '%'.$katakunci.'%')
        ->where('penulis', Auth::user()->id)
        ->where('status', 'diterima')
        ->with('users')->orderBy('view', 'desc')->paginate(5);
        return view('penulis.dashboard.index', ['beritaCount' => $beritaCount,
            'beritasetuju' => $beritasetuju,
            'beritatolak' => $beritatolak,
            'kontak' => $kontak,
            'user' => $user,
            'berita' => $berita
        ]);
    }
    public function pindex(){
        $kontak = Kontak::all();
            return view('admin.pesan.index', ['kontak' => $kontak]);
        }

        public function deleteall(){
            schema::disableForeignKeyConstraints();
            \App\Models\Kontak::truncate();
            schema::disableForeignKeyConstraints();
            // toastr()->success('Berhasil Menghapus Data');
            return redirect()->back();
        }

}
