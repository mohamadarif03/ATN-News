<?php

namespace Database\Seeders;

use App\Models\role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            'admin','penulis', 'editor', 'pembaca'
        ];

        foreach($data as $value){
            role::insert([
                'name' => $value
            ]);
    }
}
}
