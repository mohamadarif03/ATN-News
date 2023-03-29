<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from coderthemes.com/ATN News/layouts/vertical/calendar.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 08 Feb 2023 10:31:56 GMT -->

<head>
    <meta charset="utf-8" />
    <title>Daftar Penulis | ATN News - Responsive Bootstrap 4 Admin Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Responsive bootstrap 4 admin template" name="description" />
    <meta content="Coderthemes" name="author" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="{{ asset('assets/images/favicon.ico') }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous">
    </script>
    <!-- Plugin css -->
    <link href="{{ asset('assets/libs/fullcalendar/fullcalendar.min.css') }}" rel="stylesheet" type="text/css" />

    <!-- App css -->
    <link href="{{ asset('assets/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css"
        id="bootstrap-stylesheet" />
    <link href="{{ asset('assets/css/icons.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/css/app.min.css') }}" rel="stylesheet" type="text/css" id="app-stylesheet" />

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
                <!--End Modal-->
                @include('layouts.detail')

                <!-- Start Content-->
                <div class="container-fluid">

                    <!-- start page title -->
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box">
                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">ATN News</a></li>
                                        <li class="breadcrumb-item active">Daftar Penulis</li>
                                    </ol>
                                </div>
                                <h4 class="page-title">Daftar Penulis</h4>
                            </div>
                        </div>
                    </div>
                    <!-- end page title -->

                    <div class="row">
                        <div class="col-12">
                            <div class="card-box">
                                <div class="pb-3">
                                    <form class="d-flex" action="{{ url('penulis berita') }}" method="get">
                                        <input class="form-control me-1" type="search" name="katakunci"
                                            value="{{ Request::get('katakunci') }}" placeholder="Masukkan kata kunci"
                                            aria-label="Search">
                                        <button class="btn btn-secondary" type="submit"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                <path
                                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg></button>
                                    </form>
                                </div>
                                <div class="panel-body">
                                    <div class="row mt-4">
                                        <div class="col-12">
                                            <div class="table-responsive">
                                                <table class="table table-nowrap">
                                                    <thead>
                                                        <tr>
                                                            <th>No</th>
                                                            <th>Nama Penulis</th>
                                                            <th>Berita Dibuat</th>
                                                            <th>Berita Dikunjungi</th>
                                                            <th>Aksi</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <?php $i = $data->firstItem(); ?>
                                                        @foreach ($data as $row)
                                                            <tr>
                                                                <th scope="row">{{ $i }}</th>
                                                                <td><a class="editBtn" id="editBtn" data-role="{{ $row->role->name }}"
                                                                        data-data="{{ $row }}" href="javascript:void(0);"
                                                                        data-bs-toggle="modal" data-id="{{ $row->id }}"
                                                                        data-bs-target="#detailmodal">
                                                                        <span style="color: black">{{ $row->username }}</span>
                                                                    </a></td>
                                                                <td>{{ $row->berita_count }} Berita</td>
                                                                @if ($row->berita_sum_view == null)
                                                                    <td>
                                                                        0 <i class="mdi mdi-eye"></i>
                                                                    </td>
                                                                @else
                                                                    <td>{{ $row->berita_sum_view }}
                                                                        <i class="mdi mdi-eye"></i>
                                                                    </td>
                                                                @endif
                                                                <td>
                                                                    <form
                                                                        onsubmit="return confirm('Yakin Ingin Menjadikan Pengguna Ini Sebagai Editor?')"
                                                                        class="d-inline" action="/naikjabatan/{{ $row->id }}"
                                                                        method="POST" enctype="multipart/form-data">
                                                                        @csrf
                                                                        <button type="submit" style="color: white;" name="submit"
                                                                            class="btn btn-success"><i
                                                                                class="mdi mdi-upload"></i></button>
                                                                    </form>
                                                                    <form onsubmit="return confirm('Yakin Ingin Banned Pengguna Ini?')"
                                                                        class="d-inline" action="/banned/{{ $row->id }}"
                                                                        method="POST" enctype="multipart/form-data">
                                                                        @csrf
                                                                        <button type="submit" style="color: white;" name="submit"
                                                                            class="btn btn-danger"><i
                                                                                class="mdi mdi-block-helper"></i></button>
                                                                    </form>
                                                                </td>
                                                            </tr>
                                                            <?php $i++; ?>
                                                        @endforeach
                
                
                
                                                    </tbody>
                                                </table>
                                                <br>
                                                {{$data->links()}}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <hr>
                                    
                                </div>
                            </div>

                        </div>

                    </div>

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
    <script src="{{ asset('assets/js/vendor.min.js') }}"></script>

    <!-- plugin js -->
    <script src="{{ asset('assets/libs/moment/moment.min.js') }}"></script>
    <script src="{{ asset('assets/libs/jquery-ui/jquery-ui.min.js') }}"></script>
    <script src="{{ asset('assets/libs/fullcalendar/fullcalendar.min.js') }}"></script>

    <!-- Calendar init -->
    <script src="{{ asset('assets/js/pages/calendar.init.js') }}"></script>

    <!-- App js -->
    <script src="{{ asset('assets/js/app.min.js') }}"></script>

    <script src="{{ asset('js/script.js') }}"></script>


</body>

<!-- Mirrored from coderthemes.com/ATN News/layouts/vertical/calendar.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 08 Feb 2023 10:31:57 GMT -->

</html>
