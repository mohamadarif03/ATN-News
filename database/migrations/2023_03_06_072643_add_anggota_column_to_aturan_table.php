<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('aturan', function (Blueprint $table) {
            $table->unsignedBigInteger('anggota')->after('aturan');
            $table->foreign('anggota')->references('id')->on('users');
           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('aturan', function (Blueprint $table) {
            $table->dropColumn('anggota');
            
        });
    }
};
