<?php

namespace App\Http\Controllers;

use App\Models\berita;
use App\Models\Kategori;
use App\Models\Kontak;
use App\Models\penghargaan;
use App\Models\sosmed;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class kontakController extends Controller
{

    public function index()
    {
        $kategori = Kategori::limit(5)->orderBy('created_at', 'desc')->get();
        $kategori2 = Kategori::limit(10)->orderBy('created_at', 'desc')->skip(5)->get();
        $penghargaan = penghargaan::limit(3)->orderBy('created_at', 'desc')->get();
        $sosmed = sosmed::limit(1)->orderBy('updated_at', 'desc')->get();





        return view('kontak.index',
        [
        'kategori' => $kategori,
        'penghargaan' => $penghargaan,
        'kategori2' => $kategori2,
        'sosmed' => $sosmed,
        ]
    );
    }

    public function create(Request $request)
    {
        $request->validate([
            'judul' => 'required|max:80',
            'pesan' => 'required',
            
        ],[
            'judul.required' => 'Judul Wajib Diisi',
            'judul.max' => 'Judul Maksimal 80 Karakter',
            'pesan.required' => 'Pesan Wajib Diisi',
            
        ]);
        Kontak::create([
            'name' => Auth::user()->username,
            'email' => Auth::user()->email,
            'judul' => $request -> judul,
            'pesan' => $request -> pesan
        ]);
    
        
        return redirect()->route('kontak')->with('sukses', 'Berhasil Mengirim Pesan');
    }

}
