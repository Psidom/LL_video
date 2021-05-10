import Head from 'next/head'
import React, {useEffect,useState} from 'react'
import styles from '../styles/Home.module.css'
import Top from '../components/top_header'
import Slider from '../components/slider'


export default function Home(props) {
  
    
  return (
    <div>
      <Head>
        <title> L&L Produção de Video</title>
        <link rel="shortcut icon" href="/"/>
      </Head>
     
    <Top>

    </Top>

   
    <div id="home" className="banner-container no-padding">
        <div className="container">
            <div className="row mx-auto">

            </div>
            <div className="slider-det">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <span>Quality Data Entry Website Template</span>
                            <h2>WE DO ALL! YOU JUST BUY AND ENJOY</h2>
                            <p>Enjoy the wonderful feeling with our design</p>
                        </div>
                        <div className="carousel-item">
                            <span>Quality Data Entry Website Template</span>
                            <h2>NEW HIGH QUALITY TEMPLATE BUY AND ENJOY</h2>
                            <p>Enjoy the wonderful feeling with our design</p>
                        </div>
                        <div className="carousel-item">
                            <span>Quality Data Entry Website Template</span>
                            <h2>WE DO ALL! YOU JUST BUY AND ENJOY</h2>
                            <p>Enjoy the wonderful feeling with our design</p>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>





 
    <div className="services-container container-fluid">
        <div className="container sess-in-cont">
            <div className="session-title row">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis magna odio, eu vehicula augue suscipit ac. Pellentesque quis dui lorem. </p>
            </div>
            <div className="sess-row row">
                <div className="col-md-4">
                    <div className="serv-det">
                        <figure className="imghvr-fade">
                            <img src="assets/images/services/s1.jpg" alt=""/>
                            <figcaption>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis magna odio, eu vehicula augue suscipit ac. Pellentesque quis dui lorem. Vestibulum sed blandit diam,
                            </figcaption>
                        </figure>
                        <h6>CCTV Installation</h6>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="serv-det">
                        <figure className="imghvr-fade">
                            <img src="assets/images/services/s2.jpg" alt=""/>
                            <figcaption>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis magna odio, eu vehicula augue suscipit ac. Pellentesque quis dui lorem. Vestibulum sed blandit diam,
                            </figcaption>
                        </figure>
                        <h6>Home Automation</h6>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="serv-det">
                        <figure className="imghvr-fade">
                            <img src="assets/images/services/s3.jpg" alt=""/>
                            <figcaption>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis magna odio, eu vehicula augue suscipit ac. Pellentesque quis dui lorem. Vestibulum sed blandit diam,
                            </figcaption>
                        </figure>
                        <h6>Home & Office Security</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <section className="with-medical">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <img src="assets/images/about.jpg" alt=""/>
                </div>
                <div className="col-lg-6 col-md-12 txtr">
                    <h4>Why choos Health Care with <br/>
                        <span>Medical Hospital</span>
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis, facilisis eu ante. Mauris non placerat sapien. Pellentesque tempor arcu non odio scelerisque ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.</p>
                    <p>Ut ultricies lacus a rutrum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta dolor quis felis pulvinar dignissim. Etiam nisl ligula, ullamcorper non metus vitae, maximus efficitur mi. Vivamus ut ex ullamcorper, scelerisque lacus nec, commodo dui. Proin massa urna, volutpat vel augue eget, iaculis tristique dui. </p>
                </div>

            </div>
        </div>
    </section>

    
    <div className="key-features container-fluid">
        <div className="container">
            <div className="session-title row">
                <h2>Key Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis magna odio, eu vehicula augue suscipit ac. Pellentesque quis dui lorem. </p>
            </div>
            <div className="key-row row">
                <div className="col-md-3">
                    <div className="key-single">
                        <i className="fas fa-fingerprint"></i>
                        <h6>High Security</h6>
                        <p>Sed ligula eros, convallis sit amet ullamcorper sit amet, consequat vel nulla. Maecenas quis convallis dolor. Ut enim lacus, aliquet at neque et,</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="key-single">
                        <i className="fas fa-user-lock"></i>
                        <h6>Full Device Protection</h6>
                        <p>Sed ligula eros, convallis sit amet ullamcorper sit amet, consequat vel nulla. Maecenas quis convallis dolor. Ut enim lacus, aliquet at neque et,</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="key-single">
                        <i className="fas fa-video"></i>
                        <h6>Remote Monitoring</h6>
                        <p>Sed ligula eros, convallis sit amet ullamcorper sit amet, consequat vel nulla. Maecenas quis convallis dolor. Ut enim lacus, aliquet at neque et,</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="key-single">
                        <i className="far fa-folder-open"></i>
                        <h6>Full Backup of Information</h6>
                        <p>Sed ligula eros, convallis sit amet ullamcorper sit amet, consequat vel nulla. Maecenas quis convallis dolor. Ut enim lacus, aliquet at neque et,</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="testimonial-cover container-fluid">
        <div className="container test-container">
            <div className="session-title row">
                <h2>Testimonial</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis magna odio, eu vehicula augue suscipit ac. Pellentesque quis dui lorem. </p>
            </div>
            <div className="test-row row">
                <div className="col-md-4">
                    <div className="test-key">
                        <img src="assets/images/testimonial/member-01.jpg" alt=""/>

                        <h5>Raouth Samuel</h5>
                        <a href="">Manager</a>

                        <p><i>vehicula pharetra est. Phasellus sagittis turpis diam. Maecenas faucibus mollis diam, at facilisis ex sagittis vel</i></p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="test-key">
                        <img src="assets/images/testimonial/member-02.jpg" alt=""/>

                        <h5>Andrew Samuel</h5>
                        <a href="">Developer</a>

                        <p>vehicula pharetra est. Phasellus sagittis turpis diam. Maecenas faucibus mollis diam, at facilisis ex sagittis vel</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="test-key">
                        <img src="assets/images/testimonial/member-03.jpg" alt=""/>

                        <h5>Arun Kumar</h5>
                        <a href="">Manager</a>

                        <p>vehicula pharetra est. Phasellus sagittis turpis diam. Maecenas faucibus mollis diam, at facilisis ex sagittis vel</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div className="client-container container-fluid">
        <div className="container">
            <div className="row client-row">
                <div className="col-md-3 col-6 br bb clinent-cover">
                    <img src="assets/images/partner/l1.png" alt=""/>
                </div>
                <div className="col-md-3 col-6 br bb clinent-cover">
                    <img src="assets/images/partner/l2.png" alt=""/>
                </div>
                <div className="col-md-3 col-6 br bb clinent-cover">
                    <img src="assets/images/partner/l3.png" alt=""/>
                </div>
                <div className="col-md-3 col-6 bb clinent-cover">
                    <img src="assets/images/partner/l5.png" alt=""/>
                </div>
                <div className="col-md-3 col-6 br clinent-cover">
                    <img src="assets/images/partner/l5.png" alt=""/>
                </div>
                <div className="col-md-3 col-6 br clinent-cover">
                     <img src="assets/images/partner/l3.png" alt=""/>
                </div>
                <div className="col-md-3 col-6 br clinent-cover">
                     <img src="assets/images/partner/l2.png" alt=""/>
                </div>
                <div className="col-md-3 col-6 clinent-cover">
                    <img src="assets/images/partner/l1.png" alt=""/>
                </div>
            </div>
        </div>
    </div>


    
        <div className="blog-container contaienr-fluid">
            <div className="container">
                <div className="session-title row">
                  <h2>Latest Blog</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit consectetur adipiscing elit.</p>
                </div>
                <div className="row news-row">
                    <div className="col-md-6">
                        <div className="news-card">
                            <div className="image">
                                <img src="assets/images/blog/blog_01.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Latest News about Smarteye</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
                                <p className="footp">
                                    27 Comments <span>/</span>
                                    Blog Design <span>/</span>
                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-card">
                            <div className="image">
                                <img src="assets/images/blog/blog_02.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Apple Launch its New Phone</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
                                <p className="footp">
                                    27 Comments <span>/</span>
                                    Blog Design <span>/</span>
                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-card">
                            <div className="image">
                                <img src="assets/images/blog/blog_03.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>About Windows 10 Update</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
                                <p className="footp">
                                    27 Comments <span>/</span>
                                    Blog Design <span>/</span>
                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-card">
                            <div className="image">
                                <img src="assets/images/blog/blog_04.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Latest News about Smarteye</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
                                <p className="footp">
                                    27 Comments <span>/</span>
                                    Blog Design <span>/</span>
                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    

<footer>
   <div className="foot-det">
       
   
    <div className="container foot-cont">
        <div className="row">
            <div className="col-md-4">
                <div className="foot-about">
                    <h4>Smarteye</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu.</p>
                    <ul>
                            <li><a><i className="fab fa-github"></i></a></li>
                            <li><a><i className="fab fa-linkedin-in"></i></a></li>
                            <li> <a><i className="fab fa-pinterest-p"></i></a></li>
                            <li><a><i className="fab fa-twitter"></i></a></li>
                            <li> <a><i className="fab fa-facebook-f"></i></a></li>
                        </ul>
                </div>
            </div>
            <div className="col-md-4 menu-foot">
                <h4>Menu</h4>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Servicesv</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Clients</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="">Contacts</a></li>
                </ul>
            </div>
            <div className="col-md-4 cont-foot">
                <h4>Contacts</h4>
                <h5>+876 876 654</h5>
                <p>454 New Seard St.Antony, Toranto</p>
                <a href="">sales@smarteyeapps.com</a>
            </div>
        </div>
    </div>
    <div className="copy-right">
        <div className="container">
            <p>2021 © All Rights Reserved | Designed and Developed by <a href="https://github.com/Psidom">psidom.com</a></p>
        </div>
    </div>
    </div>
</footer> 
   
    </div>
  )
}
