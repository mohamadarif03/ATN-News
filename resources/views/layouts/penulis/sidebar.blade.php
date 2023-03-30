<!-- ========== Left Sidebar Start ========== -->
<div class="left-side-menu">

    <div class="slimscroll-menu">

        <!--- Sidemenu -->
        <div id="sidebar-menu">

            <ul class="metismenu" id="side-menu">

                <li class="menu-title">Navigasi</li>

                <li>
                    <a href="{{url('dashboard')}}">
                        <i class="mdi mdi-view-dashboard"></i>
                        <span> Beranda </span>
                    </a>
                </li>
                <li>
                    <a href="javascript: void(0);">
                        <i class="mdi mdi-google-pages"></i>
                        <span> Berita </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <ul class="nav-second-level" aria-expanded="false">
                        <li><a href="{{url('tambah berita')}}">Tambah Berita</a></li>
                        <li><a href="{{url('berita ditolak')}}">Berita Ditolak</a></li>
                        <li><a href="{{url('berita disetujui')}}">Berita Disetujui</a></li>
                        <li><a href="{{url('dibuat')}}">Berita Saya</a></li>

                    </ul>
                </li>
            </ul>

        </div>
        <!-- End Sidebar -->

        <div class="clearfix"></div>

    </div>
    <!-- Sidebar -left -->

</div>
<!-- Left Sidebar End -->