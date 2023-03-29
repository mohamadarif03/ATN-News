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
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
        <!-- Plugin css -->
        <link href="{{asset('assets/libs/fullcalendar/fullcalendar.min.css')}}" rel="stylesheet" type="text/css" />

    <!-- App css -->
     <!-- App css -->
     <link href="{{ asset('assets/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css"
     id="bootstrap-stylesheet" />
    <link href="{{ asset('assets/css/icons.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/css/app.min.css') }}" rel="stylesheet" type="text/css" id="app-stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('assets/tom-select.css')}}">
    <style>
     #submitBtn {
         background-color:cornflowerblue;
         color: white;
         border: none;
         padding: 10px 20px;
         border-radius: 5px;
     }

     #submitBtn[disabled]{
         background-color:lightskyblue;
         cursor: not-allowed;
     }
     </style>
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
                    <!-- Start Content-->
                    <div class="container-fluid">
                        
                        <!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                
                                <div class="page-title-box">
                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">ATN News</a></li>
                                            <li class="breadcrumb-item active">Edit Berita</li>
                                        </ol>
                                    </div>
                                    <h4 class="page-title">Edit Berita</h4>
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
                                <div class="mb-3 row">
                                    <a href="ditolak.html">
                                    </a>
                                </div>
                                <form action="/updateb/{{ $data->id }}" method="post" enctype="multipart/form-data">
                                    @csrf
                                        <div class="card-box">
                                            
                                        <div class="my-3 p-3 bg-body rounded shadow-sm">
                                            <div class="mb-3 row">
                                                <label for="judul" class="col-sm-2 col-form-label">Judul</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" name="judul" value="{{ $data->judul }}">
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="deskripsi" class="col-sm-2 col-form-label">Deskripsi</label>
                                                <div class="col-sm-10">
                                                    <div class="mb-3">
                                            
                                                    {{-- <textarea class="form-control" name="deskripsi" id="deskripsi" rows="25" value="{{ $data->deskripsi }}">{{ $data->deskripsi }}</textarea> --}}
                                                    <textarea class="form-control" name="deskripsi" value="{{ $data->deskripsi }}">{{$data->deskripsi}}</textarea>
                                                      </div>
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="isi" class="col-sm-2 col-form-label">Isi</label>
                                                <div class="col-sm-10">
                                                    <div class="mb-3">
                                            
                                                    {{-- <textarea class="form-control" name="isi" id="isi" rows="25" value="{{ $data->isi }}">{{ $data->isi }}</textarea> --}}
                                                    <textarea id="summernote" name="isi" value="{{ $data->isi }}">{{$data->isi}}</textarea>
                                                      </div>
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="foto" class="col-sm-2 col-form-label">Foto</label>
                                                <div class="col-sm-10">
                                                    <label for="foto" class="">Ukuran Foto: Minimal (1000 x 600)</label>
                                                    <input type="file" class="form-control" name="foto" value="{{asset('storage/' . $data->foto)}}">
                                                    <img src="{{asset('foto/'. $data->foto)}}" style="width: 150px;" alt="">
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="jurusan" class="col-sm-2 col-form-label">Pilih Kategori</label>
                                                <div class="col-sm-10">
                                                  <select name="kategori_id" id="kategori_id" class="form-control">
                                                    <option disabled value="">Pilih Kategori</option>
                                                    @foreach($ber as $berita)
                                                        <option value="{{ $berita->id}}" <?php if ($data->kategori_id == $berita->id){
                                                            echo 'selected';
                                                        } ?>>{{ $berita->name}}</option>
                                                    @endforeach
                                                    {{-- <option value="$datap->nama_id">{{$datap->nama->nama}}</option> --}}
                                                    {{-- @foreach ($ber as $data)
                                                    <option value="{{$data->id}}" {{$data->id == $data->kategori_id  ? 'selected' : ''}}>{{$data->name}}</option>
                                                    @endforeach --}}
                                                  </select>
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="kategori_id" class="col-sm-2 col-form-label">Tag</label>
                                                <div class="col-sm-10">
                                                    <input id="input-tags" value="{{$tagstring}}" autocomplete="off" name="tag" id="tag" placeholder="Tambahkan Tag">
                                                    {{-- <input id="hidden" value="" name="berita_id" id="berita_id"> --}}
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="privasi">
                                                <input type="checkbox" name="privasi" id="termsCheck">
                                                    Setuju
                                                    <a href="{{url('privasi')}}">Kebijakan & Privasi</a>
                                                </label>                        
                                            </div>
                                            <div class="mb-3 row">
                                                <!-- <label for="simpan" class="col-sm-2 col-form-label"></label> -->
                                                <div class="col-sm-10"><button type="submit" id="submitBtn" disabled
                                                        >SIMPAN</button></div>
                                            </div>
                                          </form>
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
                                                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-success save-event waves-effect waves-light">Create event</button>
                                                <button type="button" class="btn btn-danger delete-event waves-effect waves-light" data-dismiss="modal">Delete</button>
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
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            </div>
                                            <div class="modal-body p-3">
                                                <form>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label class="control-label">Category Name</label>
                                                            <input class="form-control form-white" placeholder="Enter name" type="text" name="category-name"/>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="control-label">Choose Category Color</label>
                                                            <select class="form-control form-white" data-placeholder="Choose a color..." name="category-color">
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
                                                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-danger waves-effect waves-light save-category" data-dismiss="modal">Save</button>
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
                <h4 class="font-18 m-0 text-white">Theme Customizer</h4>
            </div>
            <div class="slimscroll-menu">
        
                <div class="p-4">
                    <div class="alert alert-warning" role="alert">
                        <strong>Customize </strong> the overall color scheme, layout, etc.
                    </div>
                    <div class="mb-2">
                        <img src="assets/images/layouts/light.png" class="img-fluid img-thumbnail" alt="">
                    </div>
                    <div class="custom-control custom-switch mb-3">
                        <input type="checkbox" class="custom-control-input theme-choice" id="light-mode-switch" checked />
                        <label class="custom-control-label" for="light-mode-switch">Light Mode</label>
                    </div>
            
                    <div class="mb-2">
                        <img src="assets/images/layouts/dark.png" class="img-fluid img-thumbnail" alt="">
                    </div>
                    <div class="custom-control custom-switch mb-3">
                        <input type="checkbox" class="custom-control-input theme-choice" id="dark-mode-switch" data-bsStyle="assets/css/bootstrap-dark.min.css" 
                            data-appStyle="assets/css/app-dark.min.css" />
                        <label class="custom-control-label" for="dark-mode-switch">Dark Mode</label>
                    </div>
            
                    <div class="mb-2">
                        <img src="assets/images/layouts/rtl.png" class="img-fluid img-thumbnail" alt="">
                    </div>
                    <div class="custom-control custom-switch mb-5">
                        <input type="checkbox" class="custom-control-input theme-choice" id="rtl-mode-switch" data-appStyle="assets/css/app-rtl.min.css" />
                        <label class="custom-control-label" for="rtl-mode-switch">RTL Mode</label>
                    </div>

                    <a href="https://1.envato.market/XY7j5" class="btn btn-danger btn-block mt-3" target="_blank"><i class="mdi mdi-download mr-1"></i> Download Now</a>
                </div>
            </div> <!-- end slimscroll-menu-->
        </div>
        <!-- /Right-bar -->

        <!-- Right bar overlay-->
        <!-- <div class="rightbar-overlay"></div>

        <a href="javascript:void(0);" class="right-bar-toggle demos-show-btn">
            <i class="mdi mdi-settings-outline mdi-spin"></i> &nbsp;Choose Demos
        </a>

        <!-- Vendor js -->
        <script src="{{ asset('assets/js/vendor.min.js') }}"></script>

    <!-- plugin js -->
    <script src="{{ asset('assets/libs/moment/moment.min.js') }}"></script>
    <script src="{{ asset('assets/libs/jquery-ui/jquery-ui.min.js') }}"></script>
    <script src="{{ asset('assets/libs/fullcalendar/fullcalendar.min.js') }}"></script>

    <!-- Calendar init -->
    <script src="{{ asset('assets/js/pages/calendar.init.js') }}"></script>

    <!-- App js -->
    <script src="{{ asset('assets/js/app.min.js') }}"></script> -->

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#summernote').summernote();
        });
    </script>
    <script src="{{asset('assets/tom-select.complete.js')}}"></script>
    <script>
        new TomSelect("#input-tags",{
	persist: false,
	createOnBlur: true,
	create: true
});
    </script>
    <script>
        const termsCheck = document.querySelector('#termsCheck');
        const submitBtn = document.querySelector('#submitBtn');
    
        // Memeriksa checkbox setiap kali diperbarui
        termsCheck.addEventListener('change', function() {
            if (this.checked) {
                // Checkbox dicentang, aktifkan tombol submit
                submitBtn.removeAttribute('disabled');
            } else {
                // Checkbox tidak dicentang, nonaktifkan tombol submit
                submitBtn.setAttribute('disabled', true);
            }
        });
    
        </script>
    </body>

<!-- Mirrored from coderthemes.com/ATN News/layouts/vertical/calendar.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 08 Feb 2023 10:31:57 GMT -->
</html>