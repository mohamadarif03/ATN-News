<?php

namespace App\Charts;

use ArielMejiaDev\LarapexCharts\LarapexChart;
use Illuminate\Support\Facades\DB;

class tahunChart
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
            ->select(DB::raw("YEAR(created_at) as year, COUNT(*) as total"))
            ->where('status', 'diterima')
            ->groupBy('year')
            ->get();

        $label = $grafikberita->pluck('year')->map(function ($year) {
            return $year;
        })->toArray();



        $data = $grafikberita->pluck('total')->toArray();

        // dd($data);
        return $this->chart->BarChart()
            ->setTitle('Data Berita Yang Diunggah')
            ->addData('Berita Yang Diunggah', $data)
            ->setLabels($label);
    }
}
