<?php

namespace App\Http\Controllers;

use App\Models\Aturan;
use Illuminate\Http\Request;

class aturan_penulisController extends Controller
{
    public function index(Request $request)
    {
        $katakunci = $request->katakunci;
        $data = Aturan::where('aturan', 'LIKE', '%'.$katakunci.'%')
        ->where('anggota', 2)
        ->paginate(5);
       
        return view('penulis.aturan.index',['data' => $data]);
    }
}
