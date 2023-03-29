<?php

namespace App\Http\Controllers;

use App\Models\Aturan;
use Illuminate\Http\Request;

class aturan_editorController extends Controller
{
    public function index(Request $request)
    {
        $katakunci = $request->katakunci;
        $data = Aturan::where('aturan', 'LIKE', '%'.$katakunci.'%')
        ->where('anggota', 3)
        ->paginate(5);
       
        return view('editor.aturane.index',['data' => $data]);
    }
}
