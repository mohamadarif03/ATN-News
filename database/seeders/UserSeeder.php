<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'username' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('sandi'),
            'status' => 'aktif',
            'role_id' => 1,
        ]);
        DB::table('users')->insert([
            
            'username' => 'editor',
            'email' => 'editor@gmail.com',
            'password' => Hash::make('sandi'),
            'status' => 'aktif',
            'role_id' => 3,
        ]);
    }
}
