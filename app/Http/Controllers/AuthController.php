<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class AuthController extends Controller
{
    public function login()
    {
        return view('login');
    }

    public function register()
    {
        return view('register');
    }
    public function registerKomentar()
    {
        return view('register_komentar');
    }
    public function authenticating(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            //cek apakah user aktif
            if (Auth::user()->status == 'tidak aktif') {
                Auth::logout();
                $request->session()->invalidate();
                $request->session()->regenerateToken();

                Session::flash('status', 'Gagal Login');
                Session::flash('message', 'Akun Anda Tidak Aktif Sekarang, Silahkan Hubungi Admin!');
                return redirect('/login');
            }elseif (Auth::user()->status == 'ditolak') {
                Auth::logout();
                $request->session()->invalidate();
                $request->session()->regenerateToken();

                $email = $credentials['email'];

                

                $user = User::where('email', $email)->pluck('ditolak')->first();
                // dd($user);
                
                Session::flash('status', 'Gagal Login');
                Session::flash('message', 'Pendaftaran Anda Telah Ditolak Oleh Admin, Karena '.$user);
                return redirect('/login');
            }elseif (Auth::user()->status == 'banned') {
                Auth::logout();
                $request->session()->invalidate();
                $request->session()->regenerateToken();

                
                
                Session::flash('status', 'Gagal Login');
                Session::flash('message', 'Akun Anda Sedang Dibanned Oleh Admin, Silahkan Hubungi Admin');
                return redirect('/login');
            }

            $request->session()->regenerate();
            if (Auth::user()-> role_id == 1) {
                return redirect('dashboard admin');
            }
            if (Auth::user()-> role_id == 2) {
                return redirect('dashboard');
            }
            if (Auth::user()-> role_id == 3) {
                return redirect('home');
            }

            // $request->session()->regenerate();
            // return redirect()->intended('dashboard');
        }
        Session::flash('status', 'Gagal Login');
        Session::flash('message', 'Email/Password Yang Anda Masukkan Salah');
        return redirect('/login');
    }
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
    public function registerProcess(Request $request)
    {
        $upload = Storage::disk('public')->put('cv',  $request ->file('cv'));
        // Session::flash('username', $request->username);
        // Session::flash('email', $request->email);
        // Session::flash('cv', $upload);
        // Session::flash('email', $request->password);
        
       $request->validate([
            'username' => 'required|regex:/^[a-zA-Z]+$/',
            'email' => 'required|unique:users|max:255',
            'password' => 'required_with:pass|same:pass',
            'cv' => 'required|mimes:pdf|file|max:5000',
        ],[
            'username.regex' => 'Username Hanya Boleh Berupa Karakter',
            'password.same' => 'Konfirmasi Password Tidak Sesuai',
            'email.unique' => 'Email Sudah Ada Di Database',
            'cv.mimes' => 'CV Harus Berformat PDF',
            'cv.max' => 'CV Tidak Boleh Lebih Besar Dari 5MB',
        ]);

        
        // $user = User::create($request->all());
        
        User::create([
            'username' => $request -> username,
            'email' => $request -> email,
            'password' => Hash::make($request -> password),
            'cv' => $upload,
            'role_id' => 2
        ]);
        
        
        Session::flash('status', 'success');
        Session::flash('message', 'Daftar berhasil. Silahkan Tunggu Persetujuan Admin');
        return redirect('register');
    }
    public function registerkomentarProcess(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|unique:users|max:255',
            'password' => 'required_with:pass|same:pass',
        ],[
            'email.unique' => 'Email Sudah Ada Di Database',
            'password.same' => 'Konfirmasi Password Tidak Sesuai'
        ]);
        // $user = User::create($request->all());
        $user = User::create([
            'username' => $request -> username,
            'email' => $request -> email,
            'password' => Hash::make($request -> password),
            'status' => 'aktif',
            'role_id' => 4
        ]);
        // Session::flash('status', 'success');
        // Session::flash('message', 'Daftar berhasil. Silahkan Tunggu Persetujuan Admin');
        return redirect('login');
    }
    public function updateprofile(Request $request, $id)
{
    $request->validate([
        'foto' => 'mimes:jpg,png,jpeg',
    ],[
        'foto.mimes' => 'Profile Wajib Berformat Jpg ',
    ]);

    $p = User::find($id);
    
    if($request->hasFile('foto')) {
        $data = DB::table('users')->where('id',$id)->get();
        foreach($data as $datas) {
            $fotos = $datas->foto;
            Storage::delete('public/'.$fotos);
        }

        $foto = Storage::disk('public')->put('fotouser',$request->file('foto'));
        $p->foto = $foto;
    }
    
    $p->fill([
        'username' => $request->username,
        'email' => $request->email,
    ])->save();
    
    return redirect()->back()->with('sukses', 'Data Berhasil Di Perbarui');
}


    public function changepass()
    {
        return view('changepass');
    }
    public function processchangepass(Request $request)
    {
        if (!hash::check($request->old_password, auth()->user()->password)) {
            dd('password lama tidak sesuai');
        }
        if ($request->new_password != $request->repeat_password) {
            dd('Konfirmasi Password Tidak Sesuai');
        }

        $user = auth()->user();
        $user->update([
            'password' => Hash::make($request -> password)
        ]);
    }
}
