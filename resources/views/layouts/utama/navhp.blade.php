<div id="header-mobile" class="header-mobile">
    <div class="header-mobile-wrap">
        <div class="mbnav edge-padding">
            <div class="navbar-left">
                {{--  --}}
                <div class="mobile-logo-wrap is-image-logo site-branding">
                    <img class="logo-default" data-mode="default" height="60" width="92"
                    src="{{asset('logoatn.png')}}
                        " alt="Technology" />
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
                
                <div class="wnav-holder w-header-search header-dropdown-outer">
                    <a href="#" data-title="Search"
                        class="icon-holder header-element search-btn search-trigger">
                        <span class="search-icon-svg"></span>
                    </a>
                    <div class="header-dropdown">
                        <div class="header-search-form live-search-form">
                           
                            <form action="{{url('search')}}" method="get" class="rb-search-form" style="display: flex">
                                <input class="form-control me-1" type="search" style="color: white" name="katakunci" value="{{ Request::get('katakunci') }}" placeholder="Masukkan kata kunci" aria-label="Search">
                                <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="color: black" viewBox="0 0 16 16">
                                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                            </form>
                            <span class="live-search-animation rb-loader"></span>
                            <div class="live-search-response"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile-qview">
            <ul id="menu-mobile-quick-access-1" class="mobile-qview-inner">
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1697">
                    <a href="{{url('/')}}"><span>Beranda</span></a>
                </li>
                @foreach ($kategori as $row)
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1698">
                    <a href="/isikategori/{{ $row->id }}"><span>{{$row->name}}</span></a>
                </li>
                @endforeach
                @foreach ($kategori2 as $row)
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1698">
                    <a href="/isikategori/{{ $row->id }}"><span>{{$row->name}}</span></a>
                </li>
                @endforeach
            </ul>
        </div>
    </div>
    <div class="mobile-collapse">
        <div class="mobile-collapse-holder">
            <div class="mobile-collapse-inner">
                <div class="mobile-search-form edge-padding">
                    <div class="header-search-form"> <span class="h5">Search</span>
                        <form method="get" action="https://foxiz.themeruby.com/tech/" class="rb-search-form">
                            <div class="search-form-inner"> <span class="search-icon"><span
                                        class="search-icon-svg"></span></span> <span class="search-text"><input
                                        type="text" class="field" placeholder="Search Headlines, News..."
                                        value="" name="s" /></span> <span class="rb-search-submit"><input
                                        type="submit" value="Search" /> <i class="rbi rbi-cright"></i></span></div>
                        </form>
                    </div>
                </div>
                <nav class="mobile-menu-wrap edge-padding">
                    <ul id="mobile-menu" class="mobile-menu">
                        <li id="menu-item-1841"
                            class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-1841">
                            <a href="#"><span>Home</span></a>
                            <ul class="sub-menu">
                                <li id="menu-item-1846"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1465 current_page_item menu-item-1846">
                                    <a href="index.html" aria-current="page"><span>Home 1</span></a>
                                </li>
                                <li id="menu-item-1845"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1845">
                                    <a href="home-2/index.html"><span>Home 2</span></a>
                                </li>
                                <li id="menu-item-1844"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1844">
                                    <a href="home-3/index.html"><span>Home 3</span></a>
                                </li>
                                <li id="menu-item-1843"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1843">
                                    <a href="home-4/index.html"><span>Home 4</span></a>
                                </li>
                                <li id="menu-item-1842"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1842">
                                    <a href="home-5/index.html"><span>Home 5</span></a>
                                </li>
                            </ul>
                        </li>
                        <li id="menu-item-1701"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1701">
                            <a href="#"><span>Categories</span></a>
                            <ul class="sub-menu">
                                <li id="menu-item-1702"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1702">
                                    <a href="category/tech-news/index.html"><span>Tech
                                            News</span></a>
                                </li>
                                <li id="menu-item-1703"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1703">
                                    <a href="category/gadget/index.html"><span>Gadget</span></a>
                                </li>
                                <li id="menu-item-1704"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1704">
                                    <a href="category/technology/index.html"><span>Technology</span></a>
                                </li>
                                <li id="menu-item-1705"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1705">
                                    <a href="category/mobile/index.html"><span>Mobile</span></a>
                                </li>
                            </ul>
                        </li>
                        <li id="menu-item-1706"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1706">
                            <a href="#"><span>Bookmarks</span></a>
                            <ul class="sub-menu">
                                <li id="menu-item-1707"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1707">
                                    <a href="customize-interests/index.html"><span>Customize
                                            Interests</span></a>
                                </li>
                                <li id="menu-item-1708"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1708">
                                    <a href="my-bookmarks/index.html"><span>My Bookmarks</span></a>
                                </li>
                            </ul>
                        </li>
                        <li id="menu-item-1709"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1709">
                            <a href="#"><span>Lainnya Foxiz</span></a>
                            <ul class="sub-menu">
                                <li id="menu-item-1710"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1710">
                                    <a href="blog/index.html"><span>Blog Index</span></a>
                                </li>
                                <li id="menu-item-1711"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1711">
                                    <a href="#"><span>Sitemap</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div class="mobile-collapse-sections edge-padding">
                    <div class="mobile-login"> <span class="mobile-login-title h6">Have an existing
                            account?</span> <a
                            href="wp-login95d2.html?redirect_to=https%3A%2F%2Ffoxiz.themeruby.com%2Ftech"
                            class="login-toggle is-login is-btn">Sign In</a></div>
                    <div class="mobile-social-list"> <span class="mobile-social-list-title h6">Follow US</span> <a
                            class="social-link-facebook" data-title="Facebook" href="#" target="_blank"
                            rel="noopener nofollow"><i class="rbi rbi-facebook"></i></a><a
                            class="social-link-twitter" data-title="Twitter" href="#" target="_blank"
                            rel="noopener nofollow"><i class="rbi rbi-twitter"></i></a><a class="social-link-youtube"
                            data-title="YouTube" href="#" target="_blank" rel="noopener nofollow"><i
                                class="rbi rbi-youtube"></i></a></div>
                </div>
                <div class="collapse-footer">
                    <div class="collapse-footer-menu">
                        <ul id="menu-footer-copyright-1" class="collapse-footer-menu-inner">
                            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1643">
                                <a href="#"><span>Contact</span></a>
                            </li>
                            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1644">
                                <a href="#"><span>Blog</span></a>
                            </li>
                            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1645">
                                <a href="#"><span>Complaint</span></a>
                            </li>
                            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1646">
                                <a href="#"><span>Advertise</span></a>
                            </li>
                        </ul>
                    </div>
                    <div class="collapse-copyright">© 2022 Foxiz News Network. Ruby Design Company.
                        All Rights Reserved.</div>
                </div>
            </div>
        </div>
    </div>
</div>
