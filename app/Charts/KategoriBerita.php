<?php

namespace App\Charts;

use App\Models\berita;
use App\Models\Kategori;
use ArielMejiaDev\LarapexCharts\LarapexChart;
use Illuminate\Support\Facades\DB;

class KategoriBerita
{
    protected $chart;

    public function __construct(LarapexChart $chart)
    {
        $this->chart = $chart;
    }

    public function build(): \ArielMejiaDev\LarapexCharts\PieChart
    {
        $data = [];
        $label = []; // inisialisasi variabel $label sebagai sebuah array
        $query = DB::table('berita')
            ->where('status', 'diterima')
            ->select('kategori_id', DB::raw('count(*) as total'))
            ->groupBy('kategori_id')
            ->get();
    
        foreach($query as $row){
            array_push($data, $row->total);
    
            // Menambahkan label untuk setiap data yang ada pada query
            $kategori = Kategori::find($row->kategori_id);
            array_push($label, $kategori->name);
        }
    
        return $this->chart->pieChart()
            ->setTitle('Kategori Berita')
            ->addData($data)
            ->setLabels($label);
    }
    
}
