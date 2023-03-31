<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Kontak;
use App\Models\sponsor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class iklanController extends Controller
{
    public function index(Request $request){

        $katakunci = $request->katakunci;
        $data = sponsor::where('sponsor', 'LIKE', '%'.$katakunci.'%')->paginate(5);
        $kontak = Kontak::all();
        return view('admin.iklan.index',['data' => $data, 'kontak' =>$kontak]);
    }

    public function tambahiklan(){
        $kontak = Kontak::all();
        return view('admin.iklan.tambahiklan', compact('kontak'));
    }

    public function insertiklan(Request $request){
        $request->validate([
            'sponsor'=>'required',
            'deskripsi'=>'required',
            'foto'=>'required|mimes:jpg, jpeg',
        ],[
            'sponsor.required'=>'Kolom iklan Wajib Diisi',
            'deskripsi.required'=>'Kolom Deskripsi Wajib Diisi',
            'foto.required'=>'Kolom Foto Wajib Diisi',
            'foto.mimes'=>'Foto Wajib Berformat JPG, JPEG',
        ]);

       
       $foto_file = $request->file('foto');
        $foto_ekstensi = $foto_file->extension();
        $foto_nama = date('ymdhis').".".$foto_ekstensi;
        $foto_file->move(public_path('fotoiklan'), $foto_nama);

        $data = sponsor::create([
            'sponsor' => $request->sponsor,
            'deskripsi' => $request->deskripsi,
            'foto' => $foto_nama,
            'mulai' => $request->mulai,
            'akhir' => $request->akhir,
            'status' => 'aktif'
           ]);
       return redirect()->route('iklan')->with('success','Data Berhasil Di Tambahkan');
    }

    public function tampiliklan($id){

        $kontak = Kontak::all();
        $data = sponsor::find($id);
        return view('admin.iklan.tampiliklan', compact('data', 'kontak'));
    }
    
    // public function tampilaturan($id){

    //     $data = Aturannews::find($id);
    //     // dd($data);
    //     return view('tampilaturan', compact('data'));
    // }
    
    public function updateiklan(Request $request, $id){
       $data = sponsor::find($id);
       if ($request->hasFile('foto')) {
        unlink(public_path('fotoiklan/' . $data->foto));
        $file = $request->file('foto');
        $filename = hash_file('md5', $file->path()) . '.' . $file->getClientOriginalExtension();
        $file->move('fotoiklan/', $filename);
        $data->foto = $filename;
        $data->save();
    }
        return redirect()->route('iklan')->with('success','Data Berhasil Di Update');

    }

    public function deleteiklan($id){
        $data = sponsor::find($id);
        unlink(public_path('fotoiklan/' . $data->foto));
        $data->delete();
        return redirect()->route('iklan')->with('success', 'Data Berhasil Di Delete' );
    }
}
