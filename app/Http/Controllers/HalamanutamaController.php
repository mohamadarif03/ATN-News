<?php

namespace App\Http\Controllers;

use App\Models\berita;
use App\Models\Kategori;
use App\Models\Komentar;
use App\Models\penghargaan;
use App\Models\sosmed;
use App\Models\sponsor;
use App\Models\tag;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HalamanutamaController extends Controller
{
    public function index()
    {
        $user = User::where('status', 'aktif')->get();
        $berita = berita::where('status', 'diterima')->where('statususer', 'aman')->limit(2)->orderBy('view', 'desc')->get();
        $berita1 = berita::where('status', 'diterima')->where('statususer', 'aman')->limit(1)->orderBy('view', 'desc')->skip(2)->get();
        $berita2 = berita::where('status', 'diterima')->where('statususer', 'aman')->limit(2)->orderBy('view', 'desc')->skip(4)->get();
        $berita3 = berita::where('status', 'diterima')->where('statususer', 'aman')->limit(4)->orderBy('view', 'desc')->skip(6)->get();
        $berita4 = berita::where('status', 'diterima')->where('statususer', 'aman')->limit(1)->orderBy('created_at', 'desc')->get();
        $berita5 = berita::where('status', 'diterima')->where('statususer', 'aman')->limit(3)->orderBy('created_at', 'desc')->skip(1)->get();
        $berita6 = berita::where('status', 'diterima')->where('statususer', 'aman')->limit(1)->orderBy('created_at', 'desc')->skip(4)->get();
        $berita7 = berita::where('status', 'diterima')->where('statususer', 'aman')->limit(3)->orderBy('created_at', 'desc')->skip(5)->get();

        $navbar1 = berita::where('status', 'diterima')->where('kategori_id', 1)->limit(5)->orderBy('view', 'desc')->get();
        // $navbar2 = berita::where('status', 'diterima')->where('kategori_id', 3)->limit(5)->orderBy('view', 'desc')->get();
        // $navbar3 = berita::where('status', 'diterima')->where('kategori_id', 4)->limit(5)->orderBy('view', 'desc')->get();
        // $navbar4 = berita::where('status', 'diterima')->where('kategori_id', 5)->limit(5)->orderBy('view', 'desc')->get();
        // $navbar5 = berita::where('status', 'diterima')->where('kategori_id', 2)->limit(5)->orderBy('view', 'desc')->get();
        $kategori = Kategori::limit(5)->orderBy('created_at', 'desc')->get();
        $kategori2 = Kategori::limit(10)->orderBy('created_at', 'desc')->skip(5)->get();
        $iklan = sponsor::limit(1)->orderBy('created_at', 'desc')->get();
        $iklan1 = sponsor::limit(1)->skip(1)->orderBy('created_at', 'desc')->get();

        $sosmed = sosmed::limit(1)->orderBy('updated_at', 'desc')->get();
        $penghargaan = penghargaan::limit(3)->orderBy('created_at', 'desc')->get();

        if (Auth::check()) {
        
            $notif = Komentar::where('user_id', Auth::user()->id)
            ->where('parent','!=', 0)->get();
 
         //    dd($notif);
         }else {
             $notif = [];
        }

        return view('category.beranda.index', ['berita' => $berita, 
        'berita1' => $berita1, 
        'berita2' => $berita2, 
        'berita3' => $berita3, 
        'berita4' => $berita4,
        'berita5' => $berita5,
        'berita6' => $berita6,
        'berita7' => $berita7,
        'navbar1' => $navbar1,
        'kategori' => $kategori,
        'kategori2' => $kategori2,
        'iklan' => $iklan,
        'penghargaan' => $penghargaan,
        'iklan1' => $iklan1,
        'sosmed' => $sosmed,
        'user' => $user,
        'notif' => $notif,
        // 'navbar2' => $navbar2,
        // 'navbar3' => $navbar3,
        // 'navbar4' => $navbar4,
        // 'navbar5' => $navbar5,
    ]);
    }
    public function isi($id){
        
        $berita = berita::where('status', 'diterima')->where('statususer', 'aman')->limit(5)->orderBy('created_at', 'desc')->get();
        $kategori = Kategori::limit(5)->orderBy('created_at', 'desc')->get();
        $kategori2 = Kategori::limit(10)->orderBy('created_at', 'desc')->skip(5)->get();
        $beritalaris = berita::where('status', 'diterima')->where('statususer', 'aman')->limit(5)->orderBy('view', 'desc')->get();
        

        $penghargaan = penghargaan::limit(3)->get();


        
        $data = berita::find($id);
        $data->update([
            'view' => $data ->view+1
        ]);

        $tag = tag::where('berita_id', $data->id)->get();
        // $tag = tag::where('id_berita',$id)-get();
        $tagstring = '';
        foreach($tag as $item){
            if($tagstring != ''){
                $tagstring = $tagstring.',';
            }
            $tagstring = $tagstring.$item->tag;
        }
        // $y = $tag->implode(', ', $tag);
        // dd($tagstring);
        
        $komentar = komentar::where('berita',$id)->where('parent', 0)->orderBy('created_at', 'desc')->limit(3)->get();
        $balas = komentar::where('berita',$id)->where('parent', 4)->orderBy('created_at', 'desc')->get();
        $sosmed = sosmed::limit(1)->orderBy('updated_at', 'desc')->get();


        return view('category.berita isi.index', ['data' => $data, 'komentar' => $komentar, 'berita' => $berita, 'beritalaris' => $beritalaris,
        'kategori' => $kategori,
        'kategori2' => $kategori2,
        'penghargaan' => $penghargaan,
        'balas' => $balas,
        'tag' => $tag,
        'tagstring' => $tagstring,
        'sosmed' => $sosmed,
    ]);

       
    }
    public function komentar(Request $request, $id){
        
        $data = berita::all();
        $request->validate([
            'komentar' => 'required|max:70'
        ],[
            'komentar.required' => 'Komentar Wajib Diisi',
            'komentar.max' => 'Komentar Maksimal 70 Karakter',
        ]);
        $komentar = komentar::create([
            'nama' => Auth::user()->username,
            'komentar' => $request->komentar, 
            'berita' => $id,
            'parent' => $request->parent,
        ]);
        return redirect()->back();
    }
}
