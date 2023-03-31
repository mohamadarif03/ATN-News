<?php

namespace App\Http\Controllers;

use App\Models\berita;
use App\Models\kategori;
use App\Models\keywoard;
use App\Models\Kontak;
use App\Models\tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;

class BeritaController extends Controller
{
    public function index()
    {
        
        $data = kategori::orderBy('created_at', 'desc')->get();
        // $data = compact('kat');
        return view('penulis.berita.index',[
            'kat' => $data
        ]);
    }
    public function berita_editor()
    {
        
        $data = kategori::orderBy('created_at', 'desc')->get();
        // $data = compact('kat');
        return view('editor.tambah.index',[
            'kat' => $data
        ]);
    }

    // public function tambahb()
    // {
        
    //     $kat = Kategori::all();
    //     return view('penulis.berita.index', compact('kat'));
    // }

    public function insertb(Request $request)
    {



        $request->validate([
            'judul' => 'required|max:80',
            'deskripsi' => 'required',
            'isi' => 'required',
            'foto' => 'required|dimensions:min_width=1000,min_height=600',
            'tag' => 'required',
            
            // 'kategori_id' => 'required',
        ],[
            'judul.required' => 'Judul Wajib Diisi',
            'deskripsi.required' => 'Deskripsi Wajib Diisi',
            'judul.max' => 'Judul Maksimal 80 Karakter',
            'isi.required' => 'Isi Berita Wajib Diisi',
            'foto.required' => 'Foto Wajib Diisi',
            'foto.dimensions' => 'Sesuaikan Ukuran Foto',
            'tag.required' => 'Tag Wajib Diisi',
            
        ]);

        $storage = 'berita';
        $dom = new \DOMDocument();
        libxml_use_internal_errors(true);
        $dom->loadHTML($request->isi, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NOIMPLIED);
        libxml_clear_errors();
        $images = $dom->getElementsByTagName('img');
        foreach($images as $img){
            $src = $img->getAttribute('src');
            if (preg_match('/data:image/', $src)) {
                preg_match('/data:image\/(?<mime>.*?)\;/', $src, $groups);
                $mimetype= $groups['mime'];
                $fileNameContent=uniqid();
                $fileNameContentRand=substr(md5($fileNameContent),6,6).'_'.time();
                $filepath = ('$storage/$fileNameContentRand.$mimetype');
                $image = Image::make($src)
                    ->resize(1200,1200)
                    ->encode($mimetype, 100)
                    ->save(public_path($filepath));
                $new_src = asset($filepath);
                $img->removeAttribute('src');
                $img->setAttribute('src',$new_src);
                $img->setAttribute('class', 'img-responsive');
            }
        }

        $foto_file = $request->file('foto');
        $foto_ekstensi = $foto_file->extension();
        $foto_nama = date('ymdhis').".".$foto_ekstensi;
        $foto_file->move(public_path('foto'), $foto_nama);

        $data = berita::create([
            'judul' => $request -> judul,
            'deskripsi' => $request -> deskripsi,
            'isi' => $dom->saveHTML(),
            'foto' => $foto_nama,
            'kategori_id' => $request -> kategori_id,
            'status' => 'belum diterima',
            'penulis' => Auth::user()->id
            
        ]);
      
       $coba = $request->tag;
      
       $test = (explode(",",$coba));
       foreach($test as $row){
        tag::create([
            'tag' => $row,
            'berita_id' => $data->id,   

        ]);
        }

       
        
        return redirect()->route('indexb')->with('success', 'Berhasil Inputkan');
    }
    public function insert_editor(Request $request)
    {


        $request->validate([
            'judul' => 'required|max:80',
            'deskripsi' => 'required',
            'isi' => 'required',
            'foto' => 'required|dimensions:min_width=1000,min_height=600',
            'tag' => 'required',
            // 'kategori_id' => 'required',
        ],[
            'judul.required' => 'Judul Wajib Diisi',
            'deskripsi.required' => 'Deskripsi Wajib Diisi',
            'judul.max' => 'Judul Maksimal 80 Karakter',
            'isi.required' => 'Isi Berita Wajib Diisi',
            'foto.required' => 'Foto Wajib Diisi',
            'foto.dimensions' => 'Sesuaikan Ukuran Foto',
            'tag.required' => 'Tag Wajib Diisi',
        ]);

        $storage = 'berita';
        $dom = new \DOMDocument();
        libxml_use_internal_errors(true);
        $dom->loadHTML($request->isi, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NOIMPLIED);
        libxml_clear_errors();
        $images = $dom->getElementsByTagName('img');
        foreach($images as $img){
            $src = $img->getAttribute('src');
            if (preg_match('/data:image/', $src)) {
                preg_match('/data:image\/(?<mime>.*?)\;/', $src, $groups);
                $mimetype= $groups['mime'];
                $fileNameContent=uniqid();
                $fileNameContentRand=substr(md5($fileNameContent),6,6).'_'.time();
                $filepath = ('$storage/$fileNameContentRand.$mimetype');
                $image = Image::make($src)
                    ->resize(1200,1200)
                    ->encode($mimetype, 100)
                    ->save(public_path($filepath));
                $new_src = asset($filepath);
                $img->removeAttribute('src');
                $img->setAttribute('src',$new_src);
                $img->setAttribute('class', 'img-responsive');
            }
        }

        $foto_file = $request->file('foto');
        $foto_ekstensi = $foto_file->extension();
        $foto_nama = date('ymdhis').".".$foto_ekstensi;
        $foto_file->move(public_path('foto'), $foto_nama);

        $data = berita::create([
            'judul' => $request -> judul,
            'deskripsi' => $request -> deskripsi,
            'isi' => $dom->saveHTML(),
            'foto' => $foto_nama,
            'kategori_id' => $request -> kategori_id,
            'status' => 'diterima',
            'penulis' => Auth::user()->id
            
        ]);
        
        // $statususer = $data->pluck('penulis');
        // dd($statususer);
      
       $coba = $request->tag;
      
       $test = (explode(",",$coba));
       foreach($test as $row){
        tag::create([
            'tag' => $row,
            'berita_id' => $data->id,   

        ]);
        }

        $test = $request->keywoard;
      
       $oke = (explode(",",$test));
       foreach($oke as $row){
        keywoard::create([
            'keywoard' => $row,
            'berita_id' => $data->id,   
        ]);
        }
        
        return redirect()->route('dibuat_editor')->with('success', 'Berhasil Inputkan');
    }

    public function indexb(Request $request)
    {
        $katakunci = $request->katakunci;
        $data = berita::where('penulis',Auth::user()->id)->orderBy('updated_at', 'desc')->where('judul', 'LIKE', '%'.$katakunci.'%')->paginate(3);
        // $data = compact('kat');
        return view('penulis.dibuat.indexb', compact('data'), [
            'data' => $data
        ] );
    }
    public function daftar_berita(Request $request)
    {
        
        $katakunci = $request->katakunci;
        $data = berita::where('status', 'diterima')
        ->orderBy('created_at', 'desc')->where('judul', 'LIKE', '%'.$katakunci.'%')->where('statususer', 'aman')->paginate(3)->withQueryString();
        // $data = compact('kat');
        $kontak = Kontak::all();
        return view('admin.berita dibuat.index',[
            'data' => $data,
            'kontak' => $kontak
        ] );
    }

    public function editb($id)
    {
        
        $data = berita::find($id);
        $ber = kategori::all();
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
        

        return view('penulis.edit.index', compact('data', 'ber', 'berita', 'tagstring'));
    }
    public function edit_editor($id)
    {
        
        $data = berita::find($id);
        $ber = kategori::all();
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
        return view('editor.edit.index', compact('data', 'ber', 'berita', 'tagstring'));
    }

    // public function tampilpegawai(Pegawai $id)
    // {
    //     $data = $id;

    //     // dd($data);
    //     return view('editpegawai', compact('data'));
    // }

    public function updateb(Request $request, $id)
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
            'status' => 'belum diterima',
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
      
    
   
        return redirect()->route('indexb')->with('success', 'Berhasil Diperbarui');
    }
    
    public function update_editor(Request $request, $id)
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
      
   
   
        return redirect()->route('setujue1')->with('success', 'Berhasil Diperbarui');
    }

    public function deleteb($id)
    {
        $data = berita::find($id);
         unlink(public_path('foto/' . $data->foto));
        $data->delete();
        return redirect()->route('indexb')->with('success', 'Berhasil Hapus');
    }

    public function delete_editor($id)
    {
        $data = berita::find($id);
        unlink(public_path('foto/' . $data->foto));
        $data->delete();
        return redirect()->route('dibuat_editor')->with('success', 'Berhasil Hapus');
    }

    public function diterima(Request $request)
    {
        $katakunci = $request->katakunci;
        $data = berita::where('judul', 'LIKE', '%'.$katakunci.'%')
        ->where('status', 'diterima')
        ->where('penulis', Auth::user()->id)
        ->paginate(3);
       
        return view('penulis.disetujui.index',['data' => $data]);
    }

    public function tolak(Request $request)
    {
        $katakunci = $request->katakunci;
        $data = berita::where('judul', 'LIKE', '%'.$katakunci.'%')
        ->where('penulis',Auth::user()->id)
        ->where('status', 'ditolak')
        ->paginate(5);
       
        return view('penulis.ditolak.index',['data' => $data]);
    }
}