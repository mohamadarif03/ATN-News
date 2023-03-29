<!DOCTYPE html>
<html lang="en">
    
<!-- Mirrored from coderthemes.com/uplon/layouts/vertical/pages-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 16 Feb 2023 09:15:50 GMT -->
<head>
        <meta charset="utf-8" />
        <title>Log In | Uplon - Responsive Bootstrap 4 Admin Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Responsive bootstrap 4 admin template" name="description" />
        <meta content="Coderthemes" name="author" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="assets/images/favicon.ico">

        <!-- App css -->
        <link href="{{asset('assets/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" id="bootstrap-stylesheet" />
        <link href="{{asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('assets/css/app.min.css')}}" rel="stylesheet" type="text/css"  id="app-stylesheet" />

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
                                        <h5 class="text-muted text-uppercase py-3 font-16">Perbarui Kata Sandi</h5>
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
                                    @if (session()->has('status'))
                                        <div class="alert alert-success">
                                            {{session()->get('status')}}
                                        </div>
                                    @endif
                                    <form action="{{route('password.update')}}" method="POST" class="mt-2">
                                        @csrf
    
                                        
                                        <div class="form-group mb-3">
                                            <input class="form-control" type="hidden"  name="token" value="{{request()->token}}">
                                        </div>
                                        <div class="form-group mb-3">
                                            <input class="form-control" type="hidden"  name="email" value="{{request()->email}}">
                                        </div>
                                        <div class="form-group mb-3">
                                            <input class="form-control" type="password" required name="password" id="password" placeholder="Kata Sandi">
                                        </div>
                                        <div class="form-group mb-3">
                                            <input class="form-control" type="password" required name="password_confirmation" id="password" placeholder="Konfirmasi Password">
                                        </div>
                                        
                                        {{-- <div class="form-group mb-3">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="checkbox-signin" checked>
                                                <label class="custom-control-label" for="checkbox-signin">Ingat Saya</label>
                                            </div>
                                        </div> --}}
                                        
    
                                        <div class="form-group text-center">
                                            <button class="btn btn-success btn-block waves-effect waves-light" type="submit"> Perbarui Kata Sandi </button>
                                        </div>

    
                                    </form>
    
                                </div> <!-- end card-body -->
                            </div>
                            <!-- end card -->
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
        <script src="{{asset('assets/js/vendor.min.js')}}"></script>

        <!-- App js -->
        <script src="{{asset('assets/js/app.min.js')}}"></script>
        
    </body>

<!-- Mirrored from coderthemes.com/uplon/layouts/vertical/pages-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 16 Feb 2023 09:15:50 GMT -->
</html>