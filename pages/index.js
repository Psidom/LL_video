import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Top from "../components/top_header";
import ReactPlayer from "react-player";
//Componentes
import Slider from "../components/slider";
import Servicos from "../components/Servicos/index";
import Porque from "../components/PorqueNos/index";
import Produtos from "../components/Produtos/index";
import Footer from "../components/Footer/index";

export default function Home(props) {
    return (
        <div>
            <Head>
                <title> L&L Produção de Video</title>
                <link rel='shortcut icon' href='/' />
            </Head>

            <Top></Top>

            <div id='home' className='banner-container no-padding'>
                <div className='container'>
                    <div className='row mx-auto'></div>
                    <div className='slider-det'>
                        <div
                            id='carouselExampleControls'
                            className='carousel slide'
                            data-ride='carousel'
                        >
                            <ol className='carousel-indicators'>
                                <li
                                    data-target='#carouselExampleIndicators'
                                    data-slide-to='0'
                                    className='active'
                                ></li>
                                <li
                                    data-target='#carouselExampleIndicators'
                                    data-slide-to='1'
                                ></li>
                                <li
                                    data-target='#carouselExampleIndicators'
                                    data-slide-to='2'
                                ></li>
                            </ol>
                            <div className='carousel-inner'>
                                <div className='carousel-item active'>
                                    <span>
                                        AS MELHORES SOLUÇÕES EM VÍDEOS E
                                        FOTOGRAFIAS
                                    </span>
                                    <h2>WE DO ALL! YOU JUST BUY AND ENJOY</h2>
                                    <p>
                                        Enjoy the wonderful feeling with our
                                        design
                                    </p>
                                </div>
                                <div className='carousel-item'>
                                    <span>
                                        Quality Data Entry Website Template
                                    </span>
                                    <h2>
                                        NEW HIGH QUALITY TEMPLATE BUY AND ENJOY
                                    </h2>
                                    <p>
                                        Enjoy the wonderful feeling with our
                                        design
                                    </p>
                                </div>
                                <div className='carousel-item'>
                                    <span>
                                        Quality Data Entry Website Template
                                    </span>
                                    <h2>WE DO ALL! YOU JUST BUY AND ENJOY</h2>
                                    <p>
                                        Enjoy the wonderful feeling with our
                                        design
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Servicos />

            <Porque />

            <Produtos />
            <Footer />
        </div>
    );
}
