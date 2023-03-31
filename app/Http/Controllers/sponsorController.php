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
        $data = sosmed::find(1);
        $kontak = Kontak::all();
        // $item = Role::all();
       
        return view('admin.sosmed.index',['data' => $data, 'kontak' => $kontak]);
    }

    public function insertsosmed(Request $request){
        //dd($request->all());
        $data = sosmed::find(1)->update($request->all());
       return redirect()->back()->with('sukses', 'Berhasil Mengedit Data');
    }

    public function tampilsosmed($id){

        $data = sosmed::orderBy('created_at', 'desc')->get();
        // $role = Role::whereIn('name', ['penulis', 'editor'])->get();
        $sosmed = sosmed::all();
        $kontak = Kontak::all();
        return view('admin.sosmed.tampilsosmed', compact('data', 'kontak', 'sosmed'));
    }

}
