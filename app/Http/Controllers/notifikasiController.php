<?php

namespace App\Http\Controllers;

use App\Models\Komentar;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notification;

class notifikasiController extends Controller
{
    public function Notifikasi(Request $request)
    {
        $komen = Komentar::find($request->komen_id);
        $user = User::find($request->user_id);

        
    }
}
