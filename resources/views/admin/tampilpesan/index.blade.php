<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from coderthemes.com/ATN News/layouts/vertical/calendar.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 08 Feb 2023 10:31:56 GMT -->

<head>
    <meta charset="utf-8" />
    <title>Calendar | ATN News - Responsive Bootstrap 4 Admin Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Responsive bootstrap 4 admin template" name="description" />
    <meta content="Coderthemes" name="author" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.ico">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous">
    </script>
    <!-- Plugin css -->
    <link href="{{asset('assets/libs/fullcalendar/fullcalendar.min.css')}}" rel="stylesheet" type="text/css" />

    <!-- App css -->
    <link href="{{asset('assets/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" id="bootstrap-stylesheet" />
    <link href="{{asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/css/app.min.css')}}" rel="stylesheet" type="text/css" id="app-stylesheet" />

</head>

<body>

    <!-- Begin page -->
    <div id="wrapper">


        <!-- Topbar Start -->
<div class="navbar-custom">
    <ul class="list-unstyled topnav-menu float-right mb-0">

      
        <li class="dropdown notification-list">
            <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown"
                href="#" role="button" aria-haspopup="false" aria-expanded="false">
                <img src="{{asset('storage/' . Auth::user()->foto ?? 'profile.jpg')}}" width="100" height="100" style="border-radius: 50%;">
                <span class="d-none d-sm-inline-block ml-1 font-weight-medium">{{Auth::user()->username}}</span>

            </a>
            <div class="dropdown-menu dropdown-menu-right profile-dropdown ">

                <!-- item-->
                <div class="dropdown-header noti-title">
                    <h6 class="text-overflow text-white m-0">Selamat Datang !</h6>
                </div>

                <!-- item-->
                <!-- Button trigger modal -->
                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    class="dropdown-item notify-item">
                    <i class="mdi mdi-account-outline"></i>
                    <span>Profil</span>
                </a>


                <div class="dropdown-divider"></div>

                <!-- item-->
                <a href="{{ url('logout') }}" class="dropdown-item notify-item">
                    <i class="mdi mdi-logout-variant"></i>
                    <span>Keluar</span>
                </a>

            </div>
        </li>

        

    </ul>

    <!-- LOGO -->
    <div class="logo-box">
        <a href="index.html" class="logo text-center logo-dark">
            <span class="logo-lg">
                <!-- <img src="assets/images/logo-light.png/" alt="" height="22"> -->
                <span class="logo-lg-text-dark">ATN News</span>
            </span>
            <span class="logo-sm">
                <!-- <span class="logo-lg-text-dark">U</span> -->
                <img src="assets/images/logo-sm.png" alt="" height="24">
            </span>
        </a>

        <a href="index.html" class="logo text-center logo-light">
            <span class="logo-lg">
                <img src="assets/images/logo-light.png" alt="" height="22">
                <!-- <span class="logo-lg-text-dark">ATN News</span> -->
            </span>
            <span class="logo-sm">
                <!-- <span class="logo-lg-text-dark">U</span> -->
                <img src="assets/images/logo-sm-light.png" alt="" height="24">
            </span>
        </a>
    </div>

    <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
        <li>
            <button class="button-menu-mobile waves-effect waves-light">
                <i class="mdi mdi-menu"></i>
            </button>
        </li>

    </ul>
</div>
<!-- end Topbar -->



        @include('layouts.admin.sidebar')

        <!-- ============================================================== -->
        <!-- Start Page Content here -->
        <!-- ============================================================== -->

        <div class="content-page">
            <div class="content">

                <!-- Modal -->
                @include('layouts.modal')
                <!--End Modal-->
                <!-- Start Content-->
                <div class="container-fluid">

                    <!-- start page title -->
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box">
                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">ATN News</a></li>
                                        <li class="breadcrumb-item active">Pesan</li>
                                    </ol>
                                </div>
                                <h4 class="page-title">Pesan</h4>
                            </div>
                        </div>
                    </div>
                    <!-- end page title -->

                    <div class="row">
                        <div class="col-12">

                        
                      
                        <div class="card" >
                            <div class="card-body d-flex">
                                <div class="col-1 inbox-item-img"><img src="{{asset('assets/images/users/avatar-1.jpg')}}" width="50" class="rounded-circle" alt=""></div>
                                <div class="d-flex justify-content-between" style="width:100%">
                                <div class="" style="display: block;">
                                    <div class="inbox-item-img"><div class="mb-5" style="font-weight:bold;">{{$kontak->name}}</div></div>
                                    <div class="inbox-item-img"><div class="mb-2" style="font-weight:bold; text-align:center">{{$kontak->judul}}</div></div>
                                    <div class="inbox-item-img"><div class="me-3">{{$kontak->pesan}}</div></div>
                                    <div class="inbox-item-img"><div class="ellipsis1"></div></div>
                                </div>
                                {{-- <div class="inbox-item-img"><div class="" style="display:flex; justify-content:end; font-weight:bold;">{{$kontak->judul}}</div></div> --}}
                                </div>
                            </div>
                          </div>
                        </a>
                          
                        </div>
                        <!-- BEGIN MODAL -->
                  

            
                    </div>
                    <!-- end col-12 -->
                </div> <!-- end row -->

        </div> <!-- end content -->



        <!-- Footer Start -->
        <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        2016 - 2019 &copy; ATN News theme by <a href="#">Coderthemes</a>
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
                    <input type="checkbox" class="custom-control-input theme-choice" id="light-mode-switch"
                        checked />
                    <label class="custom-control-label" for="light-mode-switch">Mode Terang</label>
                </div>

                <div class="mb-2">
                    <img src="assets/images/layouts/dark.png" class="img-fluid img-thumbnail" alt="">
                </div>
                <div class="custom-control custom-switch mb-3">
                    <input type="checkbox" class="custom-control-input theme-choice" id="dark-mode-switch"
                        data-bsStyle="assets/css/bootstrap-dark.min.css"
                        data-appStyle="assets/css/app-dark.min.css" />
                    <label class="custom-control-label" for="dark-mode-switch">Mode Gelap</label>
                </div>

                <div class="mb-2">
                    <img src="assets/images/layouts/rtl.png" class="img-fluid img-thumbnail" alt="">
                </div>
                <div class="custom-control custom-switch mb-5">
                    <input type="checkbox" class="custom-control-input theme-choice" id="rtl-mode-switch"
                        data-appStyle="assets/css/app-rtl.min.css" />
                    <label class="custom-control-label" for="rtl-mode-switch">Mode RTL</label>
                </div>

                <a href="https://1.envato.market/XY7j5" class="btn btn-danger btn-block mt-3" target="_blank"><i
                        class="mdi mdi-download mr-1"></i> Unduh Sekarang</a>
            </div>
        </div> <!-- end slimscroll-menu-->
    </div>
    <!-- /Right-bar -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>



    <!-- Vendor js -->
    <script src="{{asset('assets/js/vendor.min.js')}}"></script>

    <!-- plugin js -->
    <script src="{{asset('assets/libs/moment/moment.min.js')}}"></script>
    <script src="{{asset('assets/libs/jquery-ui/jquery-ui.min.js')}}"></script>
    <script src="{{asset('assets/libs/fullcalendar/fullcalendar.min.js')}}"></script>

    <!-- Calendar init -->
    <script src="{{asset('assets/js/pages/calendar.init.js')}}"></script>

    <!-- App js -->
    <script src="{{asset('assets/js/app.min.js')}}"></script>

</body>

<!-- Mirrored from coderthemes.com/ATN News/layouts/vertical/calendar.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 08 Feb 2023 10:31:57 GMT -->

</html>
