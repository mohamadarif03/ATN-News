<!DOCTYPE html>
<html lang="en">
    
<!-- Mirrored from coderthemes.com/ATN News/layouts/vertical/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 08 Feb 2023 10:30:19 GMT -->
<head>
        <meta charset="utf-8" />
        <title>Beranda | ATN News </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Responsive bootstrap 4 admin template" name="description" />
        <meta content="Coderthemes" name="author" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="assets/images/favicon.ico">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
        <!-- App css -->
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap-stylesheet" />
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/app.min.css" rel="stylesheet" type="text/css"  id="app-stylesheet" />

    </head>

    <body>

        <!-- Begin page -->
        <div id="wrapper">

            
            @include('layouts.admin.topbar')

            
            @include('layouts.admin.sidebar')

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="content-page">
                <div class="content">
                    <!-- Modal -->
                    @include('layouts.modal')
                    <!-- Start Content-->
                    <div class="container-fluid">
                        
                        <!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">ATN News</a></li>
                                            <li class="breadcrumb-item active">Beranda</li>
                                        </ol>
                                    </div>
                                    <h4 class="page-title">Beranda</h4>
                                </div>
                            </div>
                        </div>     
                        <!-- end page title --> 

                        <div class="row">
                            <div class="col-md-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <i class="mdi mdi-account"></i>
                                    <h6 class="text-muted text-uppercase mt-0">Pengguna</h6>
                                    <h3 class="my-3" data-plugin="counterup">{{$userCount}}</h3>
                                </div>
                            </div>

                            <div class="col-md-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <i class="mdi mdi-format-list-bulleted"></i>
                                    <h6 class="text-muted text-uppercase mt-0">Kategori</h6>
                                    <h3 class="my-3"><span data-plugin="counterup">{{$kategoryCount}}</span></h3>
                                </div>
                            </div>

                            <div class="col-md-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <i class="mdi mdi-newspaper"></i>
                                    <h6 class="text-muted text-uppercase mt-0">Berita</h6>
                                    <h3 class="my-3"><span data-plugin="counterup">{{$beritaCount}}</span></h3>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <i class="mdi mdi-message-settings-variant"></i>
                                    <h6 class="text-muted text-uppercase mt-0">Aturan</h6>
                                    <h3 class="my-3"><span data-plugin="counterup">{{$aturanCount}}</span></h3>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->


                        <div class="row">

                        </div>
                        <!-- end row -->


                        <div class="row">
                           

                            <div class="col-xl-12">
                                <div class="card-box d-flex">
                                    <div class="col-5">

                                        {!! $KategoriBerita->container() !!}
                                    </div>
                                    <div class="col-4 ">

                                        {!! $GrafikBeritasChart->container() !!}
                                    </div>
                                    

                                </div>
                                <div class="card-box d-flex">
                                    <div class="col-8 ">

                                        {!! $tahunChart->container() !!}
                                    </div>
                                    

                                </div>
                            </div><!-- end col-->

                        </div>
                        <!-- end row -->
                        
                    </div> <!-- end container-fluid -->

                </div> <!-- end content -->

                

                <!-- Footer Start -->
                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                 &copy; ATN Admin
                            </div>
                        </div>
                    </div>
                </footer>
                <!-- end Footer -->

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->

        </div>
        <!-- END wrapper -->

        <!-- Right Sidebar -->
        <div class="right-bar">
            <div class="rightbar-title">
                <a href="javascript:void(0);" class="right-bar-toggle float-right">
                    <i class="mdi mdi-close"></i>
                </a>
                <h4 class="font-18 m-0 text-white">Penyesuaian Tema</h4>
            </div>
            <div class="slimscroll-menu">
        
                <div class="p-4">
                    <div class="alert alert-warning" role="alert">
                        <strong>Penyesuaian </strong> 
                        skema warna keseluruhan, tata letak, dll.
                    </div>
                    <div class="mb-2">
                        <img src="assets/images/layouts/light.png" class="img-fluid img-thumbnail" alt="">
                    </div>
                    <div class="custom-control custom-switch mb-3">
                        <input type="checkbox" class="custom-control-input theme-choice" id="light-mode-switch" checked />
                        <label class="custom-control-label" for="light-mode-switch">Mode Terang</label>
                    </div>
            
                    <div class="mb-2">
                        <img src="assets/images/layouts/dark.png" class="img-fluid img-thumbnail" alt="">
                    </div>
                    <div class="custom-control custom-switch mb-3">
                        <input type="checkbox" class="custom-control-input theme-choice" id="dark-mode-switch" data-bsStyle="assets/css/bootstrap-dark.min.css" 
                            data-appStyle="assets/css/app-dark.min.css" />
                        <label class="custom-control-label" for="dark-mode-switch">Mode Gelap</label>
                    </div>
            
                    <div class="mb-2">
                        <img src="assets/images/layouts/rtl.png" class="img-fluid img-thumbnail" alt="">
                    </div>
                    <div class="custom-control custom-switch mb-5">
                        <input type="checkbox" class="custom-control-input theme-choice" id="rtl-mode-switch" data-appStyle="assets/css/app-rtl.min.css" />
                        <label class="custom-control-label" for="rtl-mode-switch">Mode RTL</label>
                    </div>

                    <a href="https://1.envato.market/XY7j5" class="btn btn-danger btn-block mt-3" target="_blank"><i class="mdi mdi-download mr-1"></i> Unduh Sekarang</a>
                </div>
            </div> <!-- end slimscroll-menu-->
        </div>
        <!-- /Right-bar -->

        <!-- Right bar overlay-->
        <div class="rightbar-overlay"></div>

       

        <!-- Vendor js -->
        <script src="assets/js/vendor.min.js"></script>

        <!--Morris Chart-->
        <script src="assets/libs/morris-js/morris.min.js"></script>
        <script src="assets/libs/raphael/raphael.min.js"></script>

        <!-- Dashboard init js-->
        <script src="assets/js/pages/dashboard.init.js"></script>

        <!-- App js -->
        <script src="assets/js/app.min.js"></script>
        <script src="{{ $KategoriBerita->cdn() }}"></script>

        {{ $KategoriBerita->script() }}
        <script src="{{ $GrafikBeritasChart->cdn() }}"></script>

        {{ $GrafikBeritasChart->script() }}
        <script src="{{ $GrafikBeritasChart->cdn() }}"></script>

        {{ $tahunChart->script() }}
    </body>

<!-- Mirrored from coderthemes.com/ATN News/layouts/vertical/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 08 Feb 2023 10:31:01 GMT -->
</html>