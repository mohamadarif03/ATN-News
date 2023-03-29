<?php

namespace App\Charts;

use App\Models\berita;
use ArielMejiaDev\LarapexCharts\LarapexChart;

class BeritaChart
{
    protected $chart;

    public function __construct(LarapexChart $chart)
    {
        $this->chart = $chart;
    }

    public function build(): \ArielMejiaDev\LarapexCharts\BarChart
    {
        $beritaKategori = berita::get();

        $data = [
            $beritaKategori->where('kategori_id', 1)->count(),
            $beritaKategori->where('kategori_id', 2)->count(),
            $beritaKategori->where('kategori_id', 3)->count(),
            $beritaKategori->where('kategori_id', 4)->count(),
            $beritaKategori->where('kategori_id', 5)->count(),
        ];
        $label = [
            'Olahraga',
            'Kuliner',
            'Permainan',
            'Edukasi',
            'Politik',
        ];
        return $this->chart->barChart()
            ->setTitle('Kategori Berita')
            ->setSubtitle(date('Y'))
            ->addData($data)
            ->addData('Boston', [7, 3, 8, 2, 6, 4])
            ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June']);
    }
}
