<?php

namespace App\Http\Controllers;

use App\Models\berita;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class tolakController extends Controller
{
    public function tolak($id)
    {
        $data = berita::find($id);
        // $ber = kategori::all();
        $berita = berita::all();

        return view('editor.daftare.tolak', compact('data','berita'));
    }
    public function fungsitolak(Request $request, $id)
    {
        $data = berita::find($id);
        $data->update([
            'ditolak' => $request -> ditolak,
            'status' => 'ditolak',
            'editor' => Auth::user()->id
        ]);
        return redirect()->route('tolake1')->with('success', 'Berhasil Diperbarui');
    }
    public function tolake1(Request $request)
    {
        $katakunci = $request->katakunci;
        $data = berita::where('judul', 'LIKE', '%'.$katakunci.'%')
        ->where('status', 'ditolak')
        ->where('editor', Auth::user()->id)
        ->orderBy('updated_at', 'desc')
        ->paginate(5);
       
        return view('editor.tolake1.index',['data' => $data]);
    }
    public function tolake2(Request $request)
    {
        $katakunci = $request->katakunci;
        $data = berita::where('judul', 'LIKE', '%'.$katakunci.'%')
        ->where('status', 'ditolak')
        ->orderBy('updated_at', 'desc')
        ->paginate(5);
       
        return view('editor.tolake2.index',['data' => $data]);
    }
}
