<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class forgotController extends Controller
{
    public function index()
    {
        return view('forgotpass');
    }
    public function forgotprocess(Request $request)
    {
        $request->validate(['email' => 'required|email']);
        $status = Password::sendResetLink(
            $request->only('email')
        );
        return $status === Password::RESET_LINK_SENT
        ?back()->with(['status' => 'Berhasil Mengirimkan Veifikasi Untuk Reset Sandi, Silahkan Cek Email Anda'])
        : back()->withErrors(['error' =>'Akun Anda Belum Terdaftar']);
    }
    public function resetpass($token)
    {
        return view('resetpass', ['token' => $token]);
    }
    public function resetprocess(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed',
        ],[
            'password.confirmed' => 'Konfirmasi Password Tidak Sesuai'
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));
     
                $user->save();
     
                event(new PasswordReset($user));
            }
        );
        return $status === Password::PASSWORD_RESET
        ? redirect()->route('login')
        : redirect('login')->withErrors(['email' => [__($status)]]);
    }
}
