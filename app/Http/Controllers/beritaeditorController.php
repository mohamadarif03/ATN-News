<?php

namespace App\Http\Controllers;

use App\Models\berita;
use App\Models\Kategori;
use App\Models\tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class beritaeditorController extends Controller
{
    public function index(Request $request)
    {
        $katakunci = $request->katakunci;
        $data = berita::where('judul', 'LIKE', '%'.$katakunci.'%')
        ->where('status', 'belum diterima')
        ->orderBy('updated_at', 'desc')
        ->paginate(3);

        
       
        return view('editor.daftare.index',['data' => $data]);
    }
    public function dibuat_editor(Request $request)
    {
        $katakunci = $request->katakunci;
        $data = berita::where('penulis',Auth::user()->id)->orderBy('updated_at', 'desc')->where('judul', 'LIKE', '%'.$katakunci.'%')->paginate(3);
        // $data = compact('kat');
        return view('editor.dibuat_editor.index', compact('data'), [
            'data' => $data
        ] );
    }
    public function home(Request $request)
    {
        $katakunci = $request->katakunci;
        $data = berita::where('judul', 'LIKE', '%'.$katakunci.'%')
        ->where('status', 'belum diterima')
        ->orderBy('created_at', 'desc')
        ->paginate(5);

        $beritaCount = berita::where('penulis', Auth::user()->id)->count();
        $beritasetuju = berita::where('editor', Auth::user()->id)
        ->where('status', 'diterima')
        ->count();
        $beritatolak = berita::where('editor', Auth::user()->id)
        ->where('status', 'ditolak')
        ->count(); 
        return view('editor.home.index', ['data' => $data, 'beritaCount' => $beritaCount, 'beritasetuju' => $beritasetuju, 'beritatolak' => $beritatolak]);
    }
    public function setujue1(Request $request)
    {
        $katakunci = $request->katakunci;
        $data = berita::where('judul', 'LIKE', '%'.$katakunci.'%')
        ->where('status', 'diterima')
        ->where('editor', Auth::user()->id)
        ->orderBy('updated_at', 'desc')
        ->paginate(5);
       
        return view('editor.setujue1.index',['data' => $data]);
    }
    public function setujue2(Request $request)
    {
        $katakunci = $request->katakunci;
        $data = berita::where('judul', 'LIKE', '%'.$katakunci.'%')
        ->where('status', 'diterima')
        ->orderBy('updated_at', 'desc')
        ->paginate(3);
       
        return view('editor.setujue2.index',['data' => $data]);
    }

    public function edite($id)
    {
        $data = berita::find($id);
        $ber = Kategori::all();
        $berita = berita::all();

        $tag = tag::where('berita_id', $data->id)->get();
        // $tag = tag::where('id_berita',$id)-get();
        $tagstring = '';
        foreach($tag as $item){
            if($tagstring != ''){
                $tagstring = $tagstring.',';
            }
            $tagstring = $tagstring.$item->tag;
        }
        return view('editor.edite.index', compact('data','ber', 'berita', 'tagstring'));
    }
    public function updatee(Request $request, $id)
    {
        $request->validate([
            'judul' => 'required|max:80',
            'deskripsi' => 'required',
            'isi' => 'required',
            'foto' => 'dimensions:min_width=1000,min_height=600',
            'kategori_id' => 'required',
        ], [
            'judul.required' => 'Judul Wajib Diisi',
            'judul.max' => 'Judul Maksimal 80 Karakter',
            'deskripsi.required' => 'Deskripsi Wajib Diisi',
            'isi.required' => 'Isi Berita Wajib Diisi',
            // 'foto.required' => 'Foto Wajib Diisi',
            'foto.dimensions' => 'Sesuaikan Ukuran Foto',
            'kategori_id.required' => 'Kategori Wajib Diisi',
        ]);

        $data = berita::find($id);
        $data->update([
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'isi' => $request->isi,
            'kategori_id' => $request->kategori_id,
            'status' => 'diterima',
        ]);
        if ($request->hasFile('foto')) {
            unlink(public_path('foto/' . $data->foto));
            $file = $request->file('foto');
            $filename = hash_file('md5', $file->path()) . '.' . $file->getClientOriginalExtension();
            $request->file('foto')->move('foto/', $filename);
            $data->foto = $filename;
            $data->save();
        }

        // $foto_file = $request->file('foto');
        // $foto_ekstensi = $foto_file->extension();
        // $foto_nama = date('ymdhis').".".$foto_ekstensi;
        // $foto_file->move(public_path('foto'), $foto_nama);
        
        if ($request->tag) {
            $tags = Tag::where('berita_id', $data->id)->get();
            foreach ($tags as $tag) {
                $tag->delete();
            }
    
            $coba = $request->tag;
            $test = explode(',', $coba);
            foreach ($test as $row) {
                Tag::create([
                    'tag' => $row,
                    'berita_id' => $data->id,
                ]);
            }
        }
        
        return redirect()->route('daftare')->with('success', 'Berhasil Diperbarui');
    }

    public function terimaberita($id){
        $data = berita::find($id);
        $data->update([
            'status' => 'diterima',
            'editor' => Auth::user()->id
        ]
        );
        return redirect()->route('setujue1')->with('sukses','Data Berhasil Di Perbarui');

    }

    
}
