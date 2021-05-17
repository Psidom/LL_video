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
                            <span>AS MELHORES SOLUÇÕES EM VÍDEOS E FOTOGRAFIAS</span>
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
                <h2>Nossos Serviços</h2>
                <p></p>
            </div>
            <div className="sess-row row">
                <div className="col-md-4">
                    <div className="serv-det">
                        <center><h6>Acompanhamento de Drone</h6></center>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="serv-det">
                        <center><h6>Acompanhamento em Solo</h6></center>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="serv-det">
                        <center><h6>Imagens aéreas com Helicóptero</h6></center>
                    </div>
                </div>
            </div>
            <div className="sess-row row">
                <div className="col-md-4">
                    <div className="serv-det">
                        <center><h6>Monitoramento de Obra</h6></center>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="serv-det">
                        <center><h6>Edição</h6></center>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="serv-det">
                        <center><h6>Computação Gráfica 2D / 3D</h6></center> 
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <section className="with-medical">
        <div className="container">
            <div className="row">
                <div className=" col-md-12 txtr">
                    <center>
                        <h4>Porque Nós<br/>
                            <span>L&L Produção Vídeo</span>
                        </h4>
                    </center>
                    <p>A L&L Produção é uma produtora de vídeo com mais de 10 anos atuando no mercado de produções de Vt´s, documentários, institucionais e vídeos técnicos, nos especializamos na área de construção civil com acompanhamento e monitoramento de obras.</p>
                    <p>Aliado a extensa experiencia de nossos colaboradores buscamos sempre estar na frente nas inovações tecnológicas fornecendo aos nossos clientes as melhores e mais eficiente soluções.</p> 
                </div>

            </div>
        </div>
    </section>

    
    <div className="key-features container-fluid">
        <div className="container">
            <div className="session-title row">
                <h2>Nossos Produtos</h2>
                <p>Garantido que as Obras Executadas por eles possam além de ficar no seu acervo fiquem na sua história</p>
            </div>
            <div className="key-row row">
                <div className="col-md-3">
                    <div className="key-single">
                        <center><i className="fas fa-hourglass-half"></i></center>
                        <center><h6>Monitoramento Timelapse</h6></center>
                        <center><p>O equipamento de câmera timelapse consiste em uma câmera blindada, impermeável que captura imagens em períodos pré-determinados, conforme a necessidade e transformação do local.</p></center>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="key-single">
                        <center><i className="fas fa-plane"></i></center>
                        <center><h6>Acompanhamento com drone</h6></center>
                        <center><p>Captação de imagens aéreas através de drone profissional (inspire 1) com câmera com resolução em 4k a ser realizada por uma equipe composta por profissionais com larga experiência.</p></center>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="key-single">
                        <center><i className="fas fa-video"></i></center>
                        <center><h6>Vídeo Monitoramento</h6></center>
                        <center><p>O Equipamento de câmera de vídeo monitoramento consiste em uma câmera de transmissão remota que fara transmissão durante 24hrs por todo o período da obra. </p></center>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="key-single">
                        <center><i className="far fa-folder-open"></i></center>
                        <center><h6>Relatório em Vídeo</h6></center>
                       <center> <p>Com visitas periódicas, nossa equipe captará imagens de todas as fases evolutivas da obra até o momento da sua conclusão, editando periodicamente relatório em vídeo e no final da obra um vídeo síntese de todo período da obra.</p></center>
                    </div>
                </div>
            </div>
        </div>
    </div>

<footer>
  <center>
  <div className="foot-det"> 
       <div className="container foot-cont">
           <div className="row">
               <div className="col-md-4">
                   <div className="foot-about">
                       <h4>L&L Produção de Vídeo</h4>
                       <p>Monitoramento 24hrs na sua obra conheça nossas redes sociais</p>
                        <ul>
                          <li><a><i className="fab fa-github"></i></a></li>
                          <li><a><i className="fab fa-linkedin-in"></i></a></li>
                          <li> <a><i className="fab fa-pinterest-p"></i></a></li>
                          <li><a><i className="fab fa-twitter"></i></a></li>
                          <li> <a><i className="fab fa-facebook-f"></i></a></li>
                        </ul>
                   </div>
               </div>
               
               <div className="col-md-4 cont-foot">
                   <h4>Contatos</h4>
                   <h5> <i className="fas fa-mobile"></i> (71) 9411-5317</h5>
                   <h5> <i className="fas fa-mobile"></i> (71) 98387-5191</h5>
                   <p>Rua Doutor Jose Peroba nº 325 Sala 905 Edf. Elite – Costa Azul – Ssa/Ba</p>
                   <a href="">lelproducaoevideo@gmail.com</a>
               </div>
           </div>
       </div>
       <div className="copy-right">
           <div className="container">
               <p>2021 © All Rights Reserved | Designed and Developed by <a href="https://github.com/Psidom">psidom.com</a></p>
           </div>
       </div>
       </div>
  </center>
</footer> 
   
    </div>
  )
}
