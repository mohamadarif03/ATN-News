 <!-- ========== Left Sidebar Start ========== -->
 <div class="left-side-menu">

    <div class="slimscroll-menu">

        <!--- Sidemenu -->
        <div id="sidebar-menu">

            <ul class="metismenu" id="side-menu">

                <li class="menu-title">Navigasi</li>

                <li>
                    <a href="{{url('dashboard admin')}}">
                        <i class="mdi mdi-view-dashboard"></i>
                        <span> Beranda </span>
                    </a>
                </li>
                <li>
                    <a href="javascript: void(0);">
                        <i class="mdi mdi-account"></i>
                        
                        <span> Pengguna </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <ul class="nav-second-level" aria-expanded="false">
                        <li><a href="{{url('acc')}}">Terima Pengguna</a></li>
                        <li><a href="{{url('penulis berita')}}">Daftar Penulis</a></li>
                        <li><a href="{{url('daftar_editor')}}">Daftar Editor</a></li>
                        <li><a href="{{url('dibanned')}}">Daftar Banned</a></li>


                    </ul>
                </li>
                <li>
                    <a href="javascript: void(0);">
                        <i class="mdi mdi-newspaper"></i>
                        <span> Berita </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <ul class="nav-second-level" aria-expanded="false">
                        <li><a href="{{url('berita laris')}}">Berita Terpopuler</a></li>
                        <li><a href="{{url('daftar berita')}}">Berita Dibuat</a></li>
                        
                    </ul>
                </li>
                <li>
                    <a href="{{url('kategori_admin')}}">
                        <i class="mdi mdi-format-list-bulleted"></i>
                        <span> Kategori </span>
                    </a>
                </li>
                <li>
                    <a href="{{url('penghargaan')}}">
                        <i class="mdi mdi-seal"></i>
                        <span> Penghargaan </span>
                    </a>
                </li>
                <li>
                    <a href="{{url('iklan')}}">
                        <i class="mdi mdi-instapaper"></i>
                        <span> Iklan </span>
                    </a>
                </li>
                <li>
                    <a href="{{url('pesan')}}">
                        <i class="mdi mdi-email-outline noti-icon"></i>
                        <span> Pesan </span>
                    </a>
                </li>
                <li>
                    <a href="{{url('privasi_admin')}}">
                        <i class="mdi mdi-shield"></i>
                        <span> Kebijakan & Privasi </span>
                    </a>
                </li>
                <li>
                    <a href="{{url('sosmed')}}">
                        <i class="mdi mdi-whatsapp"></i>
                        <span> Sosial Media </span>
                    </a>
                </li>
            </ul>

        </div>
        <!-- End Sidebar -->

        <div class="clearfix"></div>

    </div>
    <!-- Sidebar -left -->

</div>
<!-- Left Sidebar End -->