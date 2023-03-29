<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use App\Http\Controllers\Controller;
use App\Models\Kontak;
use Illuminate\Http\Request;
use Spatie\Backtrace\File;


class KategoriController extends Controller
{
    public function kindex(Request $request){

        $katakunci = $request->katakunci;
        $data = Kategori::where('name', 'LIKE', '%'.$katakunci.'%')->orderBy('created_at', 'desc')->paginate(5);
        $kontak = Kontak::all();
        return view('admin.kategori_admin.index',['data' => $data, 'kontak' => $kontak]);
        
    }

    public function tambahkategori(){
        $kontak = Kontak::all();
        return view('admin.kategori_admin.tambahkategori', compact('kontak'));
    }

    public function insertkategori(Request $request){
        //dd($request->all());
        
        $request->validate([
            
            'name'=>'required',
            'deskripsi'=>'required',
        ],[
            'name.required'=>'Kolom Kategori Wajib Diisi',
            'deskripsi.required'=>'Kolom Deskripsi Wajib Diisi',
        ]);
        
       
    //     if ($request->hasFile('fotokat')) {
    //         $request->file('fotokat')->move('fotokategori/', $request->file('fotokat')->getClientOriginalName());
    //         $data->fotokat = $request->file('fotokat')->getClientOriginalName();
    //         $data->save();
        
    //     // $data->foto
    // }
    $foto_file = $request->file('fotokat');
        $foto_ekstensi = $foto_file->extension();
        $foto_nama = date('ymdhis').".".$foto_ekstensi;
        $foto_file->move(public_path('fotokategori'), $foto_nama);

        $data = Kategori::create([
            'name' => $request->name,
            'deskripsi' => $request->deskripsi,
            'fotokat' => $foto_nama
           ]);
    
       return redirect()->route('kategori_admin')->with('sukses','Data Berhasil Di Tambahkan');
    }

    public function tampilkategori($id){

        $kontak = Kontak::all();
        $data = Kategori::find($id);
        return view('admin.kategori_admin.tampilkategori', compact('data', 'kontak'));
    }
    
    // public function tampilaturan($id){

    //     $data = Aturannews::find($id);
    //     // dd($data);
    //     return view('tampilaturan', compact('data'));
    // }
    
    public function updatekategori(Request $request, $id){
        $data = Kategori::find($id);
        if ($request->hasFile('fotokat')) {
            unlink(public_path('fotokategori/' . $data->fotokat));
            $file = $request->file('fotokat');
            $filename = hash_file('md5', $file->path()) . '.' . $file->getClientOriginalExtension();
            $file->move('fotokategori/', $filename);
            $data->fotokat = $filename;
            $data->save();
        }
        return redirect()->route('kategori_admin')->with('success','Data Berhasil Di Update');

    }
    public function deletekategori($id){
        $data = Kategori::find($id);
        unlink(public_path('fotokategori/' . $data->fotokat));
        $data->delete();
        return redirect()->route('kategori_admin')->with('sukses', 'Data Berhasil Di Hapus' );
    }
}
