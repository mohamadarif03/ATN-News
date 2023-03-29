<?php

namespace App\Http\Controllers;

use App\Models\Kontak;
use App\Models\Pengguna;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class PenggunaController extends Controller
{
    public function acc(Request $request,){

       
        $katakunci = $request->katakunci;
        $files = Storage::files('public/cv');
        $kontak = Kontak::all();
        $detail = User::all();
        $data = User::where('username', 'LIKE', '%'.$katakunci.'%')
        ->where('status', 'tidak aktif')
        ->orderBy('created_at', 'desc')
        ->paginate(5);
    //    dd($files);/
        
        
        return view('admin.acc.index', compact('data', 'files','kontak', 'detail'));
    }

    public function terimauser($id){
        $data = User::find($id);
        $data->update([
            'status' => 'aktif'
        ]
        );
        return redirect()->route('acc')->with('sukses','Data Berhasil Di Perbarui');

    }
    public function fungsitolakuser(Request $request, $id)
    {
        $data = User::find($id);
        $data->update([
            'ditolak' => $request -> ditolak,
            'status' => 'ditolak',
        ]);
        return redirect()->route('acc')->with('success', 'Berhasil Diperbarui');
    }
    public function tolakuser($id)
    {
        $data = User::find($id);
        $kontak = Kontak::all();
        $user = User::all();

        return view('admin.acc.tolak', compact('data','user', 'kontak'));
    }

    public function delete($id){
        $data = User::find($id);
        $data->delete();
        return redirect()->route('acc');

    }
}
