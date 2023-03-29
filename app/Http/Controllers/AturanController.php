<?php

namespace App\Http\Controllers;

use App\Models\Aturan;
use App\Http\Controllers\Controller;
use App\Models\Kontak;
use App\Models\Role;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class AturanController extends Controller
{
    public function aindex(Request $request){

        // $data = User::with('Role')
        // ->where("status","aktif");
        // if( $katakunci = $request->katakunci){
        //     $data = $data->where('username', 'LIKE', '%'.$katakunci.'%')->paginate(5);
        // }else{
        //     $data = $data->paginate(5);
        // }

        
        $katakunci = $request->katakunci;
        $Role = Role::all();
        $data = Aturan::where('aturan', 'LIKE', '%'.$katakunci.'%')->with('Role')->paginate(5);
        $kontak = Kontak::all();
        // $item = Role::all();
       
        return view('admin.aturan.index',['data' => $data, 'kontak' => $kontak, 'Role' => $Role]);
    }
    public function tambahaturan(){
        $kontak = Kontak::all();
        $role = Role::whereIn('name', ['penulis', 'editor'])->get();
        return view('admin.aturan.tambahaturan',['kontak'=>$kontak, 'role' => $role]);
    }

    public function insertaturan(Request $request){
        //dd($request->all());
        Session::flash('aturan', $request->aturan);

        $request->validate([
            
            'aturan'=>'required',
            'anggota'=>'required',
        ],[
            'aturan.required'=>'Kolom Aturan Wajib Diisi',
            'anggota.required'=>'Kolom Aturan Wajib Diisi',
        ]);
       $data = Aturan::create($request->all());
       return redirect()->route('aturan')->with('sukses','Data Berhasil Di Tambahkan');
    }

    public function tampilaturan($id){

        $data = Aturan::find($id);
        $role = Role::whereIn('name', ['penulis', 'editor'])->get();
        $aturan = Aturan::all();
        $kontak = Kontak::all();
        return view('admin.aturan.tampilaturan', compact('data', 'kontak', 'role', 'aturan'));
    }
    
    
    public function updateaturan(Request $request, $id){
        $data = Aturan::find($id);
        $data->update($request->all());
        return redirect()->route('aturan', compact('data'))->with('sukses','Data Berhasil Di Perbarui');

    }

    public function deleteaturan($id){
        $data = Aturan::find($id);
        $data->delete();
        return redirect()->route('aturan')->with('sukses', 'Data Berhasil Di Hapus' );
    }
}
