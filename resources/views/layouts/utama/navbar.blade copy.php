<nav id="site-navigation" class="main-menu-wrap" aria-label="main menu">
    <ul id="menu-main" class="main-menu rb-menu large-menu" itemscope
        itemtype="https://www.schema.org/SiteNavigationElement">
        <li id="menu-item-1585"
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children menu-item-1585">
            <a href="{{ url('/') }}"><span>Beranda</span></a>

        </li>

        <li id="menu-item-1736"
            class="menu-item menu-item-type-taxonomy menu-item-object-category current-menu-item menu-item-1736 menu-item-has-children menu-has-child-mega is-child-wide">
            <a href="{{ url('olahraga') }}" aria-current="page"><span>Olahraga</span></a>
            <div class="mega-dropdown is-mega-category">
                <div class="rb-container edge-padding">
                    <div class="mega-dropdown-inner light-scheme">
                        <div class="mega-header mega-header-fw">
                            <span class="h4">Olahraga</span><a class="mega-link is-meta"
                                href="{{ url('olahraga') }}"><span>Lihat
                                    Lainnya</span><i class="rbi rbi-cright"></i></a>
                        </div>
                        <div id="mega-listing-1736"
                            class="block-wrap block-small block-grid block-grid-small-1 rb-columns rb-col-5 is-gap-10">
                            <div class="block-inner">
                                @foreach ($navbar1 as $row)
                                    
                                <div class="p-wrap p-grid p-grid-small-1" data-pid="1563">
                                    <div class="feat-holder overlay-text">
                                        <div class="p-featured"> <a class="p-flink" href="/isi_berita/{{ $row->id }}"
                                                title="{{$row->judul}}">
                                                <img width="330" height="220"
                                                    src="{{ asset('storage/' . $row->foto) }}"
                                                    class="featured-img wp-post-image" alt=""
                                                    decoding="async" loading="lazy" /> </a>
                                            <aside class="p-format-overlay format-style-bottom">
                                                <span class="p-format format-video"><i
                                                        class="rbi rbi-video"></i></span>
                                            </aside>
                                        </div>
                                    </div>
                                    <div class="p-content"> <span class="entry-title h4"> <a class="p-url"
                                                href="/isi_berita/{{ $row->id }}" rel="bookmark">{{$row->judul}}</a></span>
                                        <div class="p-meta has-bookmark">
                                            <span class="rb-bookmark bookmark-trigger" data-pid="1563"><i
                                                    data-title="Save it" class="rbi rbi-bookmark"></i><i
                                                    data-title="Remove"
                                                    class="bookmarked-icon rbi rbi-bookmark-fill"></i></span>
                                        </div>
                                    </div>
                                </div>
                                @endforeach

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li id="menu-item-1736"
            class="menu-item menu-item-type-taxonomy menu-item-object-category current-menu-item menu-item-1736 menu-item-has-children menu-has-child-mega is-child-wide">
            <a href="{{ url('permainan') }}" aria-current="page"><span>Permainan</span></a>
            <div class="mega-dropdown is-mega-category">
                <div class="rb-container edge-padding">
                    <div class="mega-dropdown-inner light-scheme">
                        <div class="mega-header mega-header-fw">
                            <span class="h4">Permainan</span><a class="mega-link is-meta"
                                href="{{ url('permainan') }}"><span>Lihat
                                    Lainnya</span><i class="rbi rbi-cright"></i></a>
                        </div>
                        <div id="mega-listing-1736"
                            class="block-wrap block-small block-grid block-grid-small-1 rb-columns rb-col-5 is-gap-10">
                            <div class="block-inner">
                                @foreach ($navbar2 as $row)
                                    
                                <div class="p-wrap p-grid p-grid-small-1" data-pid="1563">
                                    <div class="feat-holder overlay-text">
                                        <div class="p-featured"> <a class="p-flink" href="/isi_berita/{{ $row->id }}"
                                                title="{{$row->judul}}">
                                                <img width="330" height="220"
                                                    src="{{ asset('storage/' . $row->foto) }}"
                                                    class="featured-img wp-post-image" alt=""
                                                    decoding="async" loading="lazy" /> </a>
                                            <aside class="p-format-overlay format-style-bottom">
                                                <span class="p-format format-video"><i
                                                        class="rbi rbi-video"></i></span>
                                            </aside>
                                        </div>
                                    </div>
                                    <div class="p-content"> <span class="entry-title h4"> <a class="p-url"
                                                href="/isi_berita/{{ $row->id }}" rel="bookmark">{{$row->judul}}</a></span>
                                        <div class="p-meta has-bookmark">
                                            <span class="rb-bookmark bookmark-trigger" data-pid="1563"><i
                                                    data-title="Save it" class="rbi rbi-bookmark"></i><i
                                                    data-title="Remove"
                                                    class="bookmarked-icon rbi rbi-bookmark-fill"></i></span>
                                        </div>
                                    </div>
                                </div>
                                @endforeach

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li id="menu-item-1736"
            class="menu-item menu-item-type-taxonomy menu-item-object-category current-menu-item menu-item-1736 menu-item-has-children menu-has-child-mega is-child-wide">
            <a href="{{ url('edukasi') }}" aria-current="page"><span>Edukasi</span></a>
            <div class="mega-dropdown is-mega-category">
                <div class="rb-container edge-padding">
                    <div class="mega-dropdown-inner light-scheme">
                        <div class="mega-header mega-header-fw">
                            <span class="h4">Edukasi</span><a class="mega-link is-meta"
                                href="{{ url('edukasi') }}"><span>Lihat
                                    Lainnya</span><i class="rbi rbi-cright"></i></a>
                        </div>
                        <div id="mega-listing-1736"
                            class="block-wrap block-small block-grid block-grid-small-1 rb-columns rb-col-5 is-gap-10">
                            <div class="block-inner">
                                @foreach ($navbar3 as $row)
                                    
                                <div class="p-wrap p-grid p-grid-small-1" data-pid="1563">
                                    <div class="feat-holder overlay-text">
                                        <div class="p-featured"> <a class="p-flink" href="/isi_berita/{{ $row->id }}"
                                                title="{{$row->judul}}">
                                                <img width="330" height="220"
                                                    src="{{ asset('storage/' . $row->foto) }}"
                                                    class="featured-img wp-post-image" alt=""
                                                    decoding="async" loading="lazy" /> </a>
                                            <aside class="p-format-overlay format-style-bottom">
                                                <span class="p-format format-video"><i
                                                        class="rbi rbi-video"></i></span>
                                            </aside>
                                        </div>
                                    </div>
                                    <div class="p-content"> <span class="entry-title h4"> <a class="p-url"
                                                href="/isi_berita/{{ $row->id }}" rel="bookmark">{{$row->judul}}</a></span>
                                        <div class="p-meta has-bookmark">
                                            <span class="rb-bookmark bookmark-trigger" data-pid="1563"><i
                                                    data-title="Save it" class="rbi rbi-bookmark"></i><i
                                                    data-title="Remove"
                                                    class="bookmarked-icon rbi rbi-bookmark-fill"></i></span>
                                        </div>
                                    </div>
                                </div>
                                @endforeach

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li id="menu-item-1736"
            class="menu-item menu-item-type-taxonomy menu-item-object-category current-menu-item menu-item-1736 menu-item-has-children menu-has-child-mega is-child-wide">
            <a href="{{ url('politik') }}" aria-current="page"><span>Politik</span></a>
            <div class="mega-dropdown is-mega-category">
                <div class="rb-container edge-padding">
                    <div class="mega-dropdown-inner light-scheme">
                        <div class="mega-header mega-header-fw">
                            <span class="h4">Politik</span><a class="mega-link is-meta"
                                href="{{ url('politik') }}"><span>Lihat
                                    Lainnya</span><i class="rbi rbi-cright"></i></a>
                        </div>
                        <div id="mega-listing-1736"
                            class="block-wrap block-small block-grid block-grid-small-1 rb-columns rb-col-5 is-gap-10">
                            <div class="block-inner">
                                @foreach ($navbar4 as $row)
                                    
                                <div class="p-wrap p-grid p-grid-small-1" data-pid="1563">
                                    <div class="feat-holder overlay-text">
                                        <div class="p-featured"> <a class="p-flink" href="/isi_berita/{{ $row->id }}"
                                                title="{{$row->judul}}">
                                                <img width="330" height="220"
                                                    src="{{ asset('storage/' . $row->foto) }}"
                                                    class="featured-img wp-post-image" alt=""
                                                    decoding="async" loading="lazy" /> </a>
                                            <aside class="p-format-overlay format-style-bottom">
                                                <span class="p-format format-video"><i
                                                        class="rbi rbi-video"></i></span>
                                            </aside>
                                        </div>
                                    </div>
                                    <div class="p-content"> <span class="entry-title h4"> <a class="p-url"
                                                href="/isi_berita/{{ $row->id }}" rel="bookmark">{{$row->judul}}</a></span>
                                        <div class="p-meta has-bookmark">
                                            <span class="rb-bookmark bookmark-trigger" data-pid="1563"><i
                                                    data-title="Save it" class="rbi rbi-bookmark"></i><i
                                                    data-title="Remove"
                                                    class="bookmarked-icon rbi rbi-bookmark-fill"></i></span>
                                        </div>
                                    </div>
                                </div>
                                @endforeach

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li id="menu-item-1736"
            class="menu-item menu-item-type-taxonomy menu-item-object-category current-menu-item menu-item-1736 menu-item-has-children menu-has-child-mega is-child-wide">
            <a href="{{ url('kuliner') }}" aria-current="page"><span>Kuliner</span></a>
            <div class="mega-dropdown is-mega-category">
                <div class="rb-container edge-padding">
                    <div class="mega-dropdown-inner light-scheme">
                        <div class="mega-header mega-header-fw">
                            <span class="h4">Kuliner</span><a class="mega-link is-meta"
                                href="{{ url('kuliner') }}"><span>Lihat
                                    Lainnya</span><i class="rbi rbi-cright"></i></a>
                        </div>
                        <div id="mega-listing-1736"
                            class="block-wrap block-small block-grid block-grid-small-1 rb-columns rb-col-5 is-gap-10">
                            <div class="block-inner">
                                @foreach ($navbar5 as $row)
                                    
                                <div class="p-wrap p-grid p-grid-small-1" data-pid="1563">
                                    <div class="feat-holder overlay-text">
                                        <div class="p-featured"> <a class="p-flink" href="/isi_berita/{{ $row->id }}"
                                                title="{{$row->judul}}">
                                                <img width="330" height="220"
                                                    src="{{ asset('storage/' . $row->foto) }}"
                                                    class="featured-img wp-post-image" alt=""
                                                    decoding="async" loading="lazy" /> </a>
                                            <aside class="p-format-overlay format-style-bottom">
                                                <span class="p-format format-video"><i
                                                        class="rbi rbi-video"></i></span>
                                            </aside>
                                        </div>
                                    </div>
                                    <div class="p-content"> <span class="entry-title h4"> <a class="p-url"
                                                href="/isi_berita/{{ $row->id }}" rel="bookmark">{{$row->judul}}</a></span>
                                        <div class="p-meta has-bookmark">
                                            <span class="rb-bookmark bookmark-trigger" data-pid="1563"><i
                                                    data-title="Save it" class="rbi rbi-bookmark"></i><i
                                                    data-title="Remove"
                                                    class="bookmarked-icon rbi rbi-bookmark-fill"></i></span>
                                        </div>
                                    </div>
                                </div>
                                @endforeach

                            </div>
                        </div>
                    </div>
                </div>
            </div>


    </ul>
    </li>
    </ul>

</nav>
<div class="more-section-outer menu-has-child-flex menu-has-child-mega-columns layout-col-3">

    <div id="rb-more" class="more-section flex-dropdown">
        <div class="more-section-inner">
            <div class="more-content">
                <div class="header-search-form live-search-form">
                    <span class="h5">Search</span>
                    <div class="live-search-form-outer">
                        <form method="get" action="https://foxiz.themeruby.com/tech/" class="rb-search-form">
                            <div class="search-form-inner">
                                <span class="search-icon"><span class="search-icon-svg"></span></span>
                                <span class="search-text"><input type="text" class="field"
                                        placeholder="Search Headlines, News..." value=""
                                        name="s" /></span>
                                <span class="rb-search-submit"><input type="submit" value="Search" />
                                    <i class="rbi rbi-cright"></i></span>
                            </div>
                        </form>
                        <span class="live-search-animation rb-loader"></span>
                        <div class="live-search-absolute live-search-response">
                        </div>
                    </div>
                </div>
                <div class="mega-columns">
                    <div class="more-col">
                        <div id="nav_menu-4" class="rb-section clearfix widget_nav_menu">
                            <div class="block-h widget-heading heading-layout-10">
                                <div class="heading-inner">
                                    <h5 class="heading-title">
                                        <span>Technology</span>
                                    </h5>
                                </div>
                            </div>
                            <div class="menu-more-1-container">
                                <ul id="menu-more-1" class="menu">
                                    <li id="menu-item-1739"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1739">
                                        <a href="#"><span>Innovate</span></a>
                                    </li>
                                    <li id="menu-item-1740"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1740">
                                        <a href="#"><span>Gadget</span></a>
                                    </li>
                                    <li id="menu-item-1741"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1741">
                                        <a href="#"><span>PC
                                                hardware</span></a>
                                    </li>
                                    <li id="menu-item-1742"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1742">
                                        <a href="#"><span>Review</span></a>
                                    </li>
                                    <li id="menu-item-1743"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1743">
                                        <a href="#"><span>Software</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="more-col">
                        <div id="nav_menu-5" class="rb-section clearfix widget_nav_menu">
                            <div class="block-h widget-heading heading-layout-10">
                                <div class="heading-inner">
                                    <h5 class="heading-title">
                                        <span>Health</span>
                                    </h5>
                                </div>
                            </div>
                            <div class="menu-more-2-container">
                                <ul id="menu-more-2" class="menu">
                                    <li id="menu-item-1744"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1744">
                                        <a href="#"><span>Medicine</span></a>
                                    </li>
                                    <li id="menu-item-1745"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1745">
                                        <a href="#"><span>Children</span></a>
                                    </li>
                                    <li id="menu-item-1746"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1746">
                                        <a href="#"><span>Coronavirus</span></a>
                                    </li>
                                    <li id="menu-item-1747"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1747">
                                        <a href="#"><span>Nutrition</span></a>
                                    </li>
                                    <li id="menu-item-1748"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1748">
                                        <a href="#"><span>Disease</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="more-col">
                        <div id="nav_menu-6" class="rb-section clearfix widget_nav_menu">
                            <div class="block-h widget-heading heading-layout-10">
                                <div class="heading-inner">
                                    <h5 class="heading-title">
                                        <span>Entertainment</span>
                                    </h5>
                                </div>
                            </div>
                            <div class="menu-more-3-container">
                                <ul id="menu-more-3" class="menu">
                                    <li id="menu-item-1749"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1749">
                                        <a href="#"><span>Stars</span></a>
                                    </li>
                                    <li id="menu-item-1750"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1750">
                                        <a href="#"><span>Screen</span></a>
                                    </li>
                                    <li id="menu-item-1751"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1751">
                                        <a href="#"><span>Culture</span></a>
                                    </li>
                                    <li id="menu-item-1752"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1752">
                                        <a href="#"><span>Media</span></a>
                                    </li>
                                    <li id="menu-item-1753"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1753">
                                        <a href="#"><span>Videos</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="collapse-footer">
                <div class="collapse-footer-menu">
                    <ul id="menu-footer-copyright" class="collapse-footer-menu-inner">
                        <li id="menu-item-1643"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1643">
                            <a href="#"><span>Contact</span></a>
                        </li>
                        <li id="menu-item-1644"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1644">
                            <a href="#"><span>Blog</span></a>
                        </li>
                        <li id="menu-item-1645"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1645">
                            <a href="#"><span>Complaint</span></a>
                        </li>
                        <li id="menu-item-1646"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1646">
                            <a href="#"><span>Advertise</span></a>
                        </li>
                    </ul>
                </div>
                <div class="collapse-copyright">
                    © 2022 Foxiz News
                    Network. Ruby Design
                    Company. All Rights
                    Reserved.
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
