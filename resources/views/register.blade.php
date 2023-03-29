<!DOCTYPE html>
<html lang="en">
    
<!-- Mirrored from coderthemes.com/uplon/layouts/vertical/pages-register.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 16 Feb 2023 09:15:50 GMT -->
<head>
        <meta charset="utf-8" />
        <title>Register | Uplon - Responsive Bootstrap 4 Admin Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Responsive bootstrap 4 admin template" name="description" />
        <meta content="Coderthemes" name="author" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="assets/images/favicon.ico">

        <!-- App css -->
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap-stylesheet" />
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/app.min.css" rel="stylesheet" type="text/css"  id="app-stylesheet" />
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

    <body class="authentication-bg">

        <div class="account-pages pt-5 my-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="account-card-box">
                            <div class="card mb-0">
                                <div class="card-body p-4">
                                    
                                    <div class="text-center">
                                        <div class="my-3">
                                            
                                                <span><img width="100" src="{{asset('logoatn.png')}}" alt=""></span>
                                            
                                        </div>
                                        <h5 class="text-muted text-uppercase py-3 font-16">Gabung Kami</h5>
                                    </div>
    
                                    @if ($errors->any())
                                        <div class="alert alert-danger">
                                            <ul>
                                                @foreach ($errors->all() as $error)
                                                    <li>{{$error}}</li>
                                                @endforeach
                                            </ul>
                                        </div>
                                        @endif
                                        @if (session('status'))
                                            <div class="alert alert-success">
                                                {{ session('message') }}
                                            </div>
                                    @endif
                                    <form action="" method="POST" class="mt-2" enctype="multipart/form-data">
                                        @csrf
                                        <div class="form-group mb-3">
                                            <input class="form-control" type="text" name="username" required="" placeholder="Nama" value="{{old('username')}}">
                                        </div>

                                        <div class="form-group mb-3">
                                            <input class="form-control" type="email" name="email" required="" placeholder="Email" value="{{old('email')}}">
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="">Upload CV Dengan Format: PDF</label>
                                            <input class="form-control" type="file" name="cv" required="" placeholder="Unggah CV">
                                        </div>
    
                                        <div class="form-group mb-3">
                                            <input class="form-control" type="password" name="password" required="" id="password" placeholder="Password">
                                        </div>
                                        <div class="form-group mb-3">
                                            <input class="form-control" type="password" name="pass" required="" id="password" placeholder="Konfirmasi Password">
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="privasi">
                                            <input type="checkbox" name="privasi" id="termsCheck">
                                                Setuju
                                                <a href="{{url('privasi')}}">Kebijakan & Privasi</a>
                                            </label>                        
                                        </div>
    
                                        
    
                                        <div class="form-group text-center">
                                            <button class="btn btn-success btn-block waves-effect waves-light" type="submit" id="submitBtn" disabled> Gabung Kami </button>
                                        </div>
    
                                    </form>

                                  
    
                                </div> <!-- end card-body -->
                            </div>
                            <!-- end card -->
                        </div>

                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <p class="text-white-50">Sudah Mempunyai Akun? <a href="{{url('login')}}" class="text-white ml-1"><b>Masuk</b></a></p>
                            </div> <!-- end col -->
                        </div>
                        <!-- end row -->

                    </div> <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
        <!-- end page -->

        <!-- Vendor js -->
        <script src="assets/js/vendor.min.js"></script>

        <!-- App js -->
        <script src="assets/js/app.min.js"></script>
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

<!-- Mirrored from coderthemes.com/uplon/layouts/vertical/pages-register.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 16 Feb 2023 09:15:50 GMT -->
</html>