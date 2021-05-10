import Images from 'next/image'
import Link from 'next/link'

export default function top() {
  return (
    <div class="header-container">
      <div class="header-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-12 left-item">
              <ul>
                <li>
                  <i class="fas fa-envelope-square"></i> sales@smarteyeapps.dcom
                </li>
                <li class="d-none d-sm-block">
                  <i class="fas fa-phone-square"></i> +123 987 887 765
                </li>
              </ul>
            </div>
            <div class="col-lg-5 d-none d-lg-block right-item">
              <ul>
                <li>
                  <a>
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  {" "}
                  <a>
                    <i class="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  {" "}
                  <a>
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav id="menu-jk" class="container-fluid  no-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-12 logo">
              <Images src="/images/logo.png" layout="fill"></Images>
              <Images src="/images/logo-gray.png" layout="fill"></Images>
              <a
                data-toggle="collapse"
                data-target="#nav-head"
                href="#nav-head"
              >
                <i class="fas d-block d-md-none small-menu fa-bars"></i>
              </a>
            </div>
            <div id="nav-head" class="col-md-9 nav-div d-none d-md-block">
              <ul>
                <li>
                  <a class="js-scroll-trigger" href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a class="js-scroll-trigger" href="about_us.html">
                    About Company
                  </a>
                </li>
                <li class="yc">
                  <a class="js-scroll-trigger" href="why.html">
                    Why Choos Us
                  </a>
                </li>
                <li>
                  <a class="js-scroll-trigger" href="service.html">
                    Services
                  </a>
                </li>
                <li>
                  <a class="js-scroll-trigger" href="blog.html">
                    Our Blog
                  </a>
                </li>

                <li>
                  <a class="js-scroll-trigger" href="contact_us.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
