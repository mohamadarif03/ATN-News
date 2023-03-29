<?php

namespace Database\Seeders;

use App\Models\Privasi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PrivasiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('privasis')->insert([
            'isi' =>'<div><span style="font-size: 14.4px;"><b>Kebijakan &amp; Privasi ATNB</b></span></div><div><span style="font-size: 14.4px;"><b><br></b></span></div><div><span style="font-size: 14.4px;">Aplikasi ATNB merupakan aplikasi untuk membuat atau membaca berita, aplikasi ini sudah mencangkup semua berita yang ada di lingkungan kita, Kami di ATNB ingin Anda memahami informasi apa yang kami kumpulkan dan bagaimana kami menggunakan dan membagikannya sebabnya kami mendorong Anda untuk membaca Kebijakan Privasi Kami.</span></div><div><span style="font-size: 14.4px;"><br></span></div><div><span style="font-size: 14.4px;"><b>-&gt; Fitur Bagi Pengguna Layanan :</b></span></div><div><span style="font-size: 14.4px;">Disini Kami tidak hanya menyediakan berita saja untuk Anda tetapi Anda juga dapat menulis atau membuat berita yang nantinya akan disetujui oleh editor dan akan masuk kedalam menu Beranda, berikut langkah-langkahnya :</span></div><div><span style="font-size: 14.4px;"><br></span></div><div><span style="font-size: 14.4px;"><b>- Penulis</b></span></div><div><span style="font-size: 14.4px;">Untuk Anda yang ingin membuat berita Anda hanya perlu Daftar terlebih dahulu serta mengirim CV yang nantinya akan dilihat oleh Admin, setelah itu Anda hanya tinggal menunggu konfirmasi dari Admin, setelah dikonfirmasi Anda telah resmi menjadi Penulis, setelah itu Anda bisa membuat sebuah berita, sebelum diupload ke Beranda, berita yang telah Anda buat akan di seleksi terlebih dahulu oleh seorang Editor untuk melihat berita Anda memenuhi standart atau tidak, semisal berita anda disetujui oleh Editor berita Anda akan muncul pada Beranda Utama.</span></div><div><span style="font-size: 14.4px;"><br></span></div><div><span style="font-size: 14.4px;"><b>- Editor</b></span></div><div><span style="font-size: 14.4px;">Penulis yang sudah mempunyai banyak pengalaman bisa naik jabatan menjadi seorang Editor, untuk Editor sendiri tugasnya antara lain membuat berita, menyetujui berita seorang Penulis serta menolak berita seorang Penulis</span></div><div><span style="font-size: 14.4px;"><b><br></b></span></div><div><span style="font-size: 14.4px;"><b>- Komentar</b></span></div><div><span style="font-size: 14.4px;">Bagi seorang Pembaca juga dapat berkomentar di halaman berita, disini Pembaca dapat mencurahkan hatinya untuk mengomentari sebuah berita, sebelum Pembaca berkomentar akan diminta untuk mendaftarkan dirinya terlebih dahulu, setelah melakukan pendaftaran akan bisa berkomentar.</span></div><div><span style="font-size: 14.4px;"><br></span></div><div><span style="font-size: 14.4px;"><b>-&gt; Keamanan Privasi Pengguna Layanan :</b></span></div><div><span style="font-size: 14.4px;">Kami selaku pembuat aplikasi, bekerja keras dan berusaha semaksimal mungkin untuk menjaga keamanan privasi serta menjaga informasi pengguna layanan</span></div>'
            
        ]);
    }
}
