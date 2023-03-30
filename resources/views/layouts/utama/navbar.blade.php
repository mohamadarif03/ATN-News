<head><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></script></head>
<nav id="site-navigation" class="main-menu-wrap" aria-label="main menu">
    <ul id="menu-main" class="main-menu rb-menu large-menu" itemscope
        itemtype="https://www.schema.org/SiteNavigationElement">
        <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1697">
            <a href="{{ url('/') }}"><span>Beranda</span></a>

        </li>

        @foreach ($kategori as $row)
            
        <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1697">
            <a href="/isikategori/{{ $row->id }}" aria-current="page"><span>{{$row->name}}</span></a>
           
        </li>
        @endforeach

        </ul>
    </li>
    </ul>

</nav>
<div
class="more-section-outer menu-has-child-flex menu-has-child-mega-columns layout-col-3">
<a class="more-trigger icon-holder" href="#" data-title="Lainnya"
    aria-label="more"> <span
        class="dots-icon"><span></span><span></span><span></span></span> </a>
<div id="rb-more" class="more-section flex-dropdown">
    <div class="more-section-inner">
        <div class="more-content">
           
            <div class="mega-columns">
                @foreach ($kategori2 as $row)
                    
                <a href="/isikategori/{{ $row->id }}">
                <div class="more-col">
                    <div id="nav_menu-4"
                        class="rb-section clearfix widget_nav_menu">
                        <div class="block-h widget-heading heading-layout-10">
                            <div class="heading-inner">
                                <h5 class="heading-title">
                                    <span>{{$row->name}}</span></h5>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </a>
            @endforeach


                
            </div>
        </div>
      
    </div>
</div>
</div>

</div>
<div class="navbar-right">
    @if (Route::has('login'))
        
            @auth
            @if (Auth::user()->role_id==1)  
            <div class="wnav-holder widget-h-login header-dropdown-outer">
                <a href="{{url('dashboard admin')}}" class="is-btn header-element">Beranda</a>
            </div>
            @endif
            @if (Auth::user()->role_id==2)  
            <div class="wnav-holder widget-h-login header-dropdown-outer">
                <a href="{{url('dashboard')}}" class="is-btn header-element">Beranda</a>
            </div>
            @endif
            @if (Auth::user()->role_id==3)  
            <div class="wnav-holder widget-h-login header-dropdown-outer">
                <a href="{{url('home')}}" class="is-btn header-element">Beranda</a>
            </div>
            @endif
            @if (Auth::user()->role_id==4)  
            <div class="wnav-holder widget-h-login header-dropdown-outer">
                <a href="{{url('logout')}}" class="is-btn header-element">Keluar</a>
            </div>
            @endif
            @else
            <div class="wnav-holder widget-h-login header-dropdown-outer">
                <a href="/register" class="is-btn header-element">Gabung Kami</a>
            </div>
            @endauth
        
    @endif
    
    <div class="hubungi kami">
        <a href="{{ url('kontak') }}" class="is-btn header-element"><span>Hubungi
                Kami</span>
        </a>
    </div>
