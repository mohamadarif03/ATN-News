<!-- Topbar Start -->
<div class="navbar-custom">
    <ul class="list-unstyled topnav-menu float-right mb-0">

        <li class="dropdown notification-list">
            <div class="dropdown-menu dropdown-menu-right dropdown-lg">

                <!-- item-->
                <div class="dropdown-item noti-title">
                    <h5 class="font-16 text-white m-0">
                        <span class="float-right">
                            <a href="#" class="text-white">
                                <small>Clear All</small>
                            </a>
                        </span>Messages
                    </h5>
                </div>

                <div class="slimscroll noti-scroll">

                    <div class="inbox-widget">
                        <a href="#">
                            <div class="inbox-item">
                                <div class="inbox-item-img"><img src="assets/images/users/avatar-1.jpg" class="rounded-circle" alt=""></div>
                                <p class="inbox-item-author">Chadengle</p>
                                <p class="inbox-item-text text-truncate">Hey! there I'm available...</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="inbox-item">
                                <div class="inbox-item-img"><img src="assets/images/users/avatar-2.jpg" class="rounded-circle" alt=""></div>
                                <p class="inbox-item-author">Tomaslau</p>
                                <p class="inbox-item-text text-truncate">I've finished it! See you so...</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="inbox-item">
                                <div class="inbox-item-img"><img src="assets/images/users/avatar-3.jpg" class="rounded-circle" alt=""></div>
                                <p class="inbox-item-author">Stillnotdavid</p>
                                <p class="inbox-item-text text-truncate">This theme is awesome!</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="inbox-item">
                                <div class="inbox-item-img"><img src="assets/images/users/avatar-4.jpg" class="rounded-circle" alt=""></div>
                                <p class="inbox-item-author">Kurafire</p>
                                <p class="inbox-item-text text-truncate">Nice to meet you</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="inbox-item">
                                <div class="inbox-item-img"><img src="assets/images/users/avatar-5.jpg" class="rounded-circle" alt=""></div>
                                <p class="inbox-item-author">Shahedk</p>
                                <p class="inbox-item-text text-truncate">Hey! there I'm available...</p>

                            </div>
                        </a>
                    </div> <!-- end inbox-widget -->

                </div>
                <!-- All-->
                <a href="javascript:void(0);" class="dropdown-item text-primary notify-item notify-all">
                    View all
                    <i class="fi-arrow-right"></i>
                </a>

            </div>
        </li>
        <li class="dropdown notification-list">
            <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown"
                href="#" role="button" aria-haspopup="false" aria-expanded="false">
                @if (Auth::user()->foto == 'profile.jpg')
                <img src="profile.jpg" width="100" height="100" style="border-radius: 50%;"> 
                @else
                <img src="{{asset('storage/' . Auth::user()->foto)}}" width="100" height="100" style="border-radius: 50%;">
                @endif
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
                <img src="{{asset('logoatn.png')}}" alt="" width="30" height="30">
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
