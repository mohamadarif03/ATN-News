<?php

namespace App\Charts;

use App\Models\berita;
use ArielMejiaDev\LarapexCharts\LarapexChart;
use Illuminate\Support\Facades\DB;

class GrafikBeritasChart
{
    protected $chart;

    public function __construct(LarapexChart $chart)
    {
        $this->chart = $chart;
    }

    public function build(): \ArielMejiaDev\LarapexCharts\BarChart
    {
        $data = [];
        $grafikberita = DB::table('berita')
            ->select(DB::raw('status, count(*) as total'))
            ->groupBy('status')
            ->get();
    
        $label = $grafikberita->pluck('status')->map(function ($status) {
            return ucfirst($status); // uppercase the first letter of each status
        })->toArray();
    
        $data = $grafikberita->pluck('total')->toArray();
    
        return $this->chart->BarChart()
            ->setTitle('Data Berita')
            ->addData('Berita', $data)
            ->setLabels($label);
    }
    
}
