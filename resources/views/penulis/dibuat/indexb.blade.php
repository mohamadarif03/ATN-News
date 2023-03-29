<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from coderthemes.com/ATN News/layouts/vertical/calendar.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 08 Feb 2023 10:31:56 GMT -->

<head>
    <meta charset="utf-8" />
    <title>Berita Penulis | ATN News</title>
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
    <link href="assets/libs/fullcalendar/fullcalendar.min.css" rel="stylesheet" type="text/css" />

    <!-- App css -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap-stylesheet" />
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" id="app-stylesheet" />

    {{-- batas --}}
    <link rel="stylesheet" href="css/batas.css">

</head>

<body>

    <!-- Begin page -->
    <div id="wrapper">


        @include('layouts.penulis.topbar')


        @include('layouts.penulis.sidebar')

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
                                        <li class="breadcrumb-item active">Berita Dibuat</li>
                                    </ol>
                                </div>
                                <h4 class="page-title"></h4>
                            </div>
                        </div>
                    </div>
                    <!-- end page title -->

                    <div class="row">
                        <div class="col-12">
                            @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                                </head>

                                <body d="bg-edit "
                                    style="
                                                    background-image: url('fotopenjual/bgbarang.png');
                                                    background-size: cover;">

                                    <br>
                                    <h3 class="text-center mb-4">Data Berita Dibuat</h3>
                                    <div class="row col-12 ">
                                        <form class="d-flex" action="{{ url('dibuat') }}" method="get">
                                            <input class="form-control me-1" type="search" name="katakunci"
                                                value="{{ Request::get('katakunci') }}"
                                                placeholder="Masukkan kata kunci" aria-label="Search">
                                            <button class="btn btn-secondary" type="submit"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                    <path
                                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                </svg></button>
                                        </form>

                                        @foreach ($data as $berita)
                                            <div class="card" style="width: 18rem; margin: 17px;">
                                                <div>
                                                    {{-- width: 260px;
                                                    height: 200px;
                                                    margin-top: 10px;
                                                    margin-left: 2.5px; --}}
                                                    <a href="/isi/{{ $berita->id }}">
                                                    <img style="" src="{{asset('foto/'. $berita->foto)}}"
                                                        class="card-img-top" width="150" height="200" alt="...">
                                                    </a>
                                                </div>
                                                <div class="card-body " style="">
                                                    <a href="/isi/{{ $berita->id }}">
                                                    <h5 class="card-title" style="color: black;">{!! $berita->judul !!}
                                                    </h5>
                                                    </a>
                                                    <a href="/isi/{{ $berita->id }}">
                                                        <div class="ellipsis3 card-text" style="color: black">
                                                            {!!$berita->deskripsi!!}</div>
                                                        
                                                            @foreach ($berita->tags as $tag)
                                                                

                                                                   
                                                            <button type="button" class="btn btn-light mb-3">
                                                                {{$tag->tag}}    
                                                                
                                                                
                                                                <span class="badge text-bg-secondary"></span>
                                                            </button>
                                                            
                                                            
                                                            @endforeach
                                                    </a>
                                                </div>
                                                <div class="card-body">
                                                    @if ($berita->status=='belum diterima')  
                                                        <div class="alert alert-warning" role="alert">
                                                            {{$berita->status}}
                                                        </div>
                                                    @endif
                                                    @if ($berita->status=='diterima')  
                                                        <div class="alert alert-success" role="alert">
                                                            {{$berita->status}}
                                                        </div>
                                                    @endif
                                                    @if ($berita->status=='ditolak')  
                                                        <div class="alert alert-danger" role="alert">
                                                            {{$berita->status}}
                                                        </div>
                                                    @endif
                                                </div>
                                                
                                                <div class="card-body">
                                                    <a href="/editb/{{ $berita->id }}"
                                                        class="btn btn-warning btn-sm">Edit Berita</a>
                                                    <a href="/deleteb/{{ $berita->id }}"
                                                        class="btn btn-danger btn-sm">Hapus Berita</a>
                                                </div>
                                            </div>
                                        @endforeach

                                    </div>
                                    {{ $data->links() }}



                            <!-- checkbox -->


                        </div>
                    </div>
                </div> <!-- end col-->
                <div class="col-lg-9">

                </div> <!-- end col -->
            </div> <!-- end row -->
        </div>

        <!-- BEGIN MODAL -->
        <div class="modal fade none-border" id="event-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New Event</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body p-3"></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary waves-effect"
                            data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success save-event waves-effect waves-light">Create
                            event</button>
                        <button type="button" class="btn btn-danger delete-event waves-effect waves-light"
                            data-dismiss="modal">Delete</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Add Category -->
        <div class="modal fade none-border" id="add-category">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add a category</h5>
                        <button type="button" class="close" data-dismiss="modal"
                            aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body p-3">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="control-label">Category Name</label>
                                    <input class="form-control form-white" placeholder="Enter name" type="text"
                                        name="category-name" />
                                </div>
                                <div class="col-md-6">
                                    <label class="control-label">Choose Category Color</label>
                                    <select class="form-control form-white" data-placeholder="Choose a color..."
                                        name="category-color">
                                        <option value="success">Success</option>
                                        <option value="danger">Danger</option>
                                        <option value="info">Info</option>
                                        <option value="pink">Pink</option>
                                        <option value="primary">Primary</option>
                                        <option value="warning">Warning</option>
                                        <option value="inverse">Inverse</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary waves-effect"
                            data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger waves-effect waves-light save-category"
                            data-dismiss="modal">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- END MODAL -->
    </div>
    <!-- end col-12 -->
    </div> <!-- end row -->

    </div> <!-- end container-fluid -->

    </div> <!-- end content -->



    <!-- Footer Start -->
    <footer class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    &copy; ATN Penulis <a href="#"></a>
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



    <!-- Right bar overlay-->
    <!-- <div class="rightbar-overlay"></div>

        <a href="javascript:void(0);" class="right-bar-toggle demos-show-btn">
            <i class="mdi mdi-settings-outline mdi-spin"></i> &nbsp;Pilih Tema
        </a>

        <!- Vendor js -->
    <script src="assets/js/vendor.min.js"></script>

    <!-- plugin js -->
    <script src="assets/libs/moment/moment.min.js"></script>
    <script src="assets/libs/jquery-ui/jquery-ui.min.js"></script>
    <script src="assets/libs/fullcalendar/fullcalendar.min.js"></script>

    <!-- Calendar init -->
    <script src="assets/js/pages/calendar.init.js"></script>

    <!-- App js -->
    <script src="assets/js/app.min.js"></script> 

</body>

<!-- Mirrored from coderthemes.com/ATN News/layouts/vertical/calendar.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 08 Feb 2023 10:31:57 GMT -->

</html>
