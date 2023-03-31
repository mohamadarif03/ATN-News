<?php

use App\Http\Controllers\adminberitaController;
use App\Http\Controllers\aturan_editorController;
use App\Http\Controllers\aturan_penulisController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\penghargaanController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\AturanController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\beritaeditorController;
use App\Http\Controllers\beritalarisController;
use App\Http\Controllers\daftaruserController;
use App\Http\Controllers\dbadminController;
use App\Http\Controllers\edukasiController;
use App\Http\Controllers\forgotController;
use App\Http\Controllers\HalamanutamaController;
use App\Http\Controllers\iklanController;
use App\Http\Controllers\isiController;
use App\Http\Controllers\komentarController;
use App\Http\Controllers\kontakController;
use App\Http\Controllers\kulinerController;
use App\Http\Controllers\NavbarController;
use App\Http\Controllers\olahragaController;
use App\Http\Controllers\PenggunaController;
use App\Http\Controllers\penulisviewController;
use App\Http\Controllers\permainanController;
use App\Http\Controllers\pesanController;
use App\Http\Controllers\politikController;
use App\Http\Controllers\PrivasiController;
use App\Http\Controllers\searchController;
use App\Http\Controllers\sponsorController;
use App\Http\Controllers\tagController;
use App\Http\Controllers\tolakController;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('only_guest')->group(function () {
    Route::get('login', [AuthController::class, 'login'])->name('login');
    Route::post('login', [AuthController::class, 'authenticating']);
    Route::get('register', [AuthController::class, 'register']);
    Route::post('register', [AuthController::class, 'registerProcess']);
    Route::get('register_komentar', [AuthController::class, 'registerKomentar']);
    Route::post('register_komentar', [AuthController::class, 'registerkomentarProcess']);
    Route::get('lupasandi', [forgotController::class, 'index']);
    Route::post('/forgot-password', [forgotController::class, 'forgotprocess'])->name('password.email');
    Route::get('reset-password/{token}', [forgotController::class, 'resetpass'])->name('password.reset');
    Route::post('/reset-password', [forgotController::class, 'resetprocess'])->name('password.update');
});

Route::middleware('auth')->group(function () {
    Route::put('/updateprofile/{id}', [AuthController::class, 'updateprofile']);
    Route::get('logout', [AuthController::class, 'logout']);
    Route::get('changepass', [AuthController::class, 'changepass']);
    Route::post('changepass', [AuthController::class, 'processchangepass']);
    Route::middleware('only_admin')->group(function () {


        Route::get('/tampilpesan/{id}', [pesanController::class, 'index'])->name('tampilpesan');

        //privasi admin
        Route::get('privasi_admin', [PrivasiController::class, 'privasi_admin'])->name('privasi_admin');
        Route::post('insert', [PrivasiController::class, 'insert'])->name('insert');

        Route::get('tampilprivasi', [PrivasiController::class, 'tampilprivasi'])->name('tampilprivasi');

        //kontak



        Route::get('pesan', [dbadminController::class, 'pindex']);
        Route::get('/deleteall', [dbadminController::class, 'deleteall'])->name('deleteall');

        Route::get('berita laris', [beritalarisController::class, 'index'])->name('berita laris');

        Route::post('/naikjabatan/{id}', [adminberitaController::class, 'naikjabatan'])->name('naikjabatan');

        Route::get('dashboard admin', [dbadminController::class, 'index']);

        //penggua
        Route::get('acc', [PenggunaController::class, 'acc'])->name('acc');
        Route::get('/tolakuser/{id}', [PenggunaController::class, 'tolakuser'])->name('tolakuser');
        Route::post('/terimauser/{id}', [PenggunaController::class, 'terimauser'])->name('terimauser');
        Route::post('/fungsitolakuser/{id}', [PenggunaController::class, 'fungsitolakuser'])->name('fungsitolakuser');


        //daftar editor
        Route::get('/daftar_editor', [adminberitaController::class, 'daftar_editor'])->name('daftar_editor');
        Route::post('/turunjabatan/{id}', [adminberitaController::class, 'turunjabatan'])->name('turunjabatan');

       

        //sponsor
        Route::get('sosmed', [sponsorController::class, 'aindex'])->name('sosmed');

        Route::get('/tambahsosmed', [sponsorController::class, 'tambahsosmed'])->name('tambahsosmed');
        Route::post('/insertsosmed', [sponsorController::class, 'insertsosmed'])->name('insertsosmed');

        Route::get('/tampilsosmed/{id}', [sponsorController::class, 'tampilsosmed'])->name('tampilsosmed');
        Route::post('/updatesosmed/{id}', [sponsorController::class, 'updatesosmed'])->name('updatesosmed');

        Route::get('/deletesosmed/{id}', [sponsorController::class, 'deletesosmed'])->name('deletesosmed');

        //kategori
        Route::get('kategori_admin', [KategoriController::class, 'kindex'])->name('kategori_admin');

        Route::get('/tambahkategori', [KategoriController::class, 'tambahkategori'])->name('tambahkategori');
        Route::post('/insertkategori', [KategoriController::class, 'insertkategori'])->name('insertkategori');

        Route::get('/tampilkategori/{id}', [KategoriController::class, 'tampilkategori'])->name('tampilkategori');
        Route::post('/updatekategori/{id}', [KategoriController::class, 'updatekategori'])->name('updatekategori');


        Route::get('/deletekategori/{id}', [KategoriController::class, 'deletekategori'])->name('deletekategori');

        // Route::get('user', function () {
        //     return view('admin.user.index');
        // });


        //daftar user
        Route::get('/delete/{id}', [daftaruserController::class, 'delete'])->name('delete');
        Route::get('daftarbanned', [daftaruserController::class, 'daftarbanned'])->name('daftarbanned');
        Route::post('/banned/{id}', [daftaruserController::class, 'banned'])->name('banned');
        Route::post('/aktifkan/{id}', [daftaruserController::class, 'aktifkan'])->name('aktifkan');
        Route::get('dibanned', [daftaruserController::class, 'dibanned'])->name('dibanned');
        Route::post('/rebanned/{id}', [daftaruserController::class, 'rebanned'])->name('rebanned');



        Route::get('penulis berita', [adminberitaController::class, 'dibuat'])->name('dibuat');
        Route::get('penulis view', [penulisviewController::class, 'index'])->name('index');

        Route::get('daftar berita', [BeritaController::class, 'daftar_berita'])->name('daftar berita');

        //penghargaan
        Route::get('penghargaan', [PenghargaanController::class, 'peindex'])->name('penghargaan');

        Route::get('/tambahpenghargaan', [PenghargaanController::class, 'tambahpenghargaan'])->name('tambahpenghargaan');
        Route::post('/insertpenghargaan', [PenghargaanController::class, 'insertpenghargaan'])->name('insertpenghargaan');

        Route::get('/tampilpenghargaan/{id}', [PenghargaanController::class, 'tampilpenghargaan'])->name('tampilpenghargaan');
        Route::post('/updatepenghargaan/{id}', [PenghargaanController::class, 'updatepenghargaan'])->name('updatepenghargaan');


        Route::get('/deletepenghargaan/{id}', [PenghargaanController::class, 'deletepenghargaan'])->name('deletepenghargaan');


        //Iklan
        Route::get('iklan', [iklanController::class, 'index'])->name('iklan');

        Route::get('/tambahiklan', [iklanController::class, 'tambahiklan'])->name('tambahiklan');
        Route::post('/insertiklan', [iklanController::class, 'insertiklan'])->name('insertiklan');

        Route::get('/tampiliklan/{id}', [iklanController::class, 'tampiliklan'])->name('tampiliklan');
        Route::post('/updateiklan/{id}', [iklanController::class, 'updateiklan'])->name('updateiklan');


        Route::get('/deleteiklan/{id}', [iklanController::class, 'deleteiklan'])->name('deleteiklan');

        Route::get('berita1', function () {
            return view('isi.berita1');
        });
        Route::get('berita2', function () {
            return view('isi.berita2');
        });
        Route::get('berita3', function () {
            return view('isi.berita3');
        });
    });




    Route::middleware('only_penulis')->group(function () {
       

        //daftar berita ditolak penulis
        Route::get('berita ditolak', [BeritaController::class, 'tolak'])->name('berita ditolak');

        Route::get('dashboard', [dbadminController::class, 'dashboard'])->name('dashboard');

        //berita tambah
        Route::get('tambah berita', [BeritaController::class, 'index'])->name('tambahb');

        Route::post('/insertb', [BeritaController::class, 'insertb'])->name('insertb');


        //berita edit,hapus
        Route::get('dibuat', [BeritaController::class, 'indexb'])->name('indexb');

        Route::get('/editb/{id}', [BeritaController::class, 'editb'])->name('editb');
        Route::post('/updateb/{id}', [BeritaController::class, 'updateb'])->name('updateb');

        Route::get('berita disetujui', [BeritaController::class, 'diterima'])->name('berita disetujui');

        Route::get('/deleteb/{id}', [BeritaController::class, 'deleteb'])->name('deleteb');


        

        Route::get('edit', function () {
            return view('penulis.edit.index');
        });
        Route::get('berita10', function () {
            return view('isi2.berita1');
        });
        Route::get('berita20', function () {
            return view('isi2.berita2');
        });
        Route::get('berita30', function () {
            return view('isi2.berita3');
        });
    });


    //editor

    Route::middleware('only_editor')->group(function () {
        //daftar ditolak editor
        Route::get('tolake1', [tolakController::class, 'tolake1'])->name('tolake1');

        //Tolak Berita
        Route::get('/tolak/{id}', [tolakController::class, 'tolak'])->name('tolak');
        Route::post('/fungsitolak/{id}', [tolakController::class, 'fungsitolak'])->name('fungsitolak');




        //daftar berita editor
        Route::get('daftare', [beritaeditorController::class, 'index'])->name('daftare');
        Route::get('/edite/{id}', [beritaeditorController::class, 'edite'])->name('edite');
        Route::post('/updatee/{id}', [beritaeditorController::class, 'updatee'])->name('updatee');
        Route::post('/terimaberita/{id}', [beritaeditorController::class, 'terimaberita'])->name('terimaberita');

        //berita editor
        Route::get('berita_editor', [BeritaController::class, 'berita_editor'])->name('berita_editor');
        Route::get('dibuat_editor', [beritaeditorController::class, 'dibuat_editor'])->name('dibuat_editor');

        Route::post('/insert_editor', [BeritaController::class, 'insert_editor'])->name('insert_editor');
        Route::get('/edit_editor/{id}', [BeritaController::class, 'edit_editor'])->name('edit_editor');
        Route::post('/update_editor/{id}', [BeritaController::class, 'update_editor'])->name('update_editor');

        Route::get('/delete_editor/{id}', [BeritaController::class, 'delete_editor'])->name('delete_editor');



        //beranda editor
        Route::get('home', [beritaeditorController::class, 'home'])->name('home');
        Route::get('setujue1', [beritaeditorController::class, 'setujue1'])->name('setujue1');
        // Route::get('setujue2', [beritaeditorController::class, 'setujue2'])->name('setujue2');


    });
});

//halaman utama
Route::get('/', [HalamanutamaController::class, 'index'])->name('/');
Route::get('/isi_berita/{id}', [HalamanutamaController::class, 'isi'])->name('isi_berita');

Route::post('/komentar/{id}', [HalamanutamaController::class, 'komentar'])->name('komentar');

Route::get('olahraga', [olahragaController::class, 'index']);
Route::get('edukasi', [edukasiController::class, 'index']);
Route::get('kuliner', [kulinerController::class, 'index']);
Route::get('politik', [politikController::class, 'index']);
Route::get('permainan', [permainanController::class, 'index']);

Route::get('/isikategori/{id}', [NavbarController::class, 'index'])->name('isikategori');

Route::get('search', [searchController::class, 'index'])->name('search');

Route::get('tag', [tagController::class, 'index'])->name('tag');

Route::get('privasi', [PrivasiController::class, 'privasi'])->name('privasi');

Route::get('kontak', [kontakController::class, 'index']);
Route::post('kontak', [kontakController::class, 'create'])->name('kontak');

Route::get('isi/{id}', [isiController::class, 'index'])->name('isi');



