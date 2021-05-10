import Images from 'next/image'
import Link from 'next/link'
import React, {useEffect,useState} from 'react'

export default function top() {
  const [navbar, setNavbar] = useState(false)
  const [navmob, setNavmob] = useState(false)
  const mudarNav = () =>{
      console.log(window.screenY)
      if(window.scrollY>=80){
          setNavbar(true)
      }else{
          setNavbar(false)
      }
      
    }
  const setmob = () =>{
      if(onclick){
          setNavmob(true)
      }else{
          setNavmob(false)
      }
  }
  if (typeof window !== "undefined") {
    window.addEventListener('scroll',mudarNav)
  }
    

  return (
    <div className="header-container">
    <div className="header-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-12 left-item">
                    <ul>
                        <li><i className="fas fa-envelope-square"></i> sales@smarteyeapps.dcom</li>
                        <li className="d-none d-sm-block"><i className="fas fa-phone-square"></i> +123 987 887 765</li>
                    </ul>
                </div>
                <div className="col-lg-5 d-none d-lg-block right-item">
                    <ul>
                        <li><a><i className="fab fa-github"></i></a></li>
                        <li><a><i className="fab fa-linkedin-in"></i></a></li>
                        <li> <a><i className="fab fa-pinterest-p"></i></a></li>
                        <li><a><i className="fab fa-twitter"></i></a></li>
                        <li> <a><i className="fab fa-facebook-f"></i></a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    <nav id="menu-jk" className={navbar ? 'container-fluid no-padding menufixo active' : 'container-fluid no-padding menufixo' }>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-12 logo">
                    <img className="log" src="assets/images/logo.png" alt=""/>
                    <img className="log-gray" src="assets/images/logo-gray.png" alt=""/>
                    <a data-toggle="collapse" onClick={setmob} data-target="#nav-head" className={navmob ? 'collapsed' : ' ' } href="#nav-head" aria-expanded ={navmob ? false : true}><i className="fas d-block d-md-none small-menu fa-bars" ></i></a>
                </div>
                <div id="nav-head" className={navmob ? 'col-md-9 nav-div d-none d-md-block collapse': 'col-md-9 nav-div d-none d-md-block collapse show'}>
                    <ul>
                        <li><a className="js-scroll-trigger" href="index.html">Home</a></li>
                        <li><a className="js-scroll-trigger" href="about_us.html">About Company</a></li>
                        <li className="yc"><a className="js-scroll-trigger" href="why.html">Why Choos Us</a></li>
                        <li><a className="js-scroll-trigger" href="service.html">Services</a></li>
                        <li><a className="js-scroll-trigger" href="blog.html">Our Blog</a></li>
                   
                        <li><a className="js-scroll-trigger" href="contact_us.html">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</div>
  );
}
