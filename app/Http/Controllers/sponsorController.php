<?php

namespace App\Http\Controllers;

// use App\Models\sosmed;
use App\Http\Controllers\Controller;
use App\Models\Kontak;
use App\Models\Role;
use App\Models\sosmed;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class sponsorController extends Controller
{
    public function aindex(Request $request){
        
        $katakunci = $request->katakunci;
        // $Role = Role::all();
        $data = sosmed::where('wa', 'LIKE', '%'.$katakunci.'%')
        ->Orwhere('ig', 'LIKE', '%'.$katakunci.'%')
        ->Orwhere('email', 'LIKE', '%'.$katakunci.'%')
        ->orderBy('updated_at', 'desc')
        ->paginate(5);
        $kontak = Kontak::all();
        // $item = Role::all();
       
        return view('admin.sosmed.index',['data' => $data, 'kontak' => $kontak]);
    }
    public function tambahsosmed(){
        $kontak = Kontak::all();
        // $role = Role::whereIn('name', ['penulis', 'editor'])->get();
        return view('admin.sosmed.tambahsosmed',['kontak'=>$kontak]);
    }

    public function insertsosmed(Request $request){
        //dd($request->all());
        Session::flash('sosmed', $request->sosmed);

        $request->validate([
            
            'wa'=>'required',
            'ig'=>'required',
            'email'=>'required',
        ],[
            'wa.required'=>'Kolom Whatsapp Wajib Diisi',
            'ig.required'=>'Kolom Instagram Wajib Diisi',
            'email.required'=>'Kolom Email Wajib Diisi',
        ]);
       $data = sosmed::create($request->all());
       return redirect()->route('sosmed')->with('sukses','Data Berhasil Di Tambahkan');
    }

    public function tampilsosmed($id){

        $data = sosmed::find($id);
        // $role = Role::whereIn('name', ['penulis', 'editor'])->get();
        $sosmed = sosmed::all();
        $kontak = Kontak::all();
        return view('admin.sosmed.tampilsosmed', compact('data', 'kontak', 'sosmed'));
    }
    
    
    public function updatesosmed(Request $request, $id){
        $data = sosmed::find($id);
        $data->update($request->all());
        return redirect()->route('sosmed', compact('data'))->with('sukses','Data Berhasil Di Perbarui');

    }

    public function deletesosmed($id){
        $data = sosmed::find($id);
        $data->delete();
        return redirect()->route('sosmed')->with('sukses', 'Data Berhasil Di Hapus' );
    }
}
