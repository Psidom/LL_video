import { ReactNode } from "react";

function Footer({ children }) {
    return (
        <footer>
            <center>
                <div className='foot-det'>
                    <div className='container foot-cont'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='foot-about'>
                                    <h4>L&L Produção de Vídeo</h4>
                                    <p>
                                        Monitoramento 24hrs na sua obra conheça
                                        nossas redes sociais
                                    </p>
                                    <ul>
                                        <li>
                                            <a>
                                                <i className='fab fa-github'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className='fab fa-linkedin-in'></i>
                                            </a>
                                        </li>
                                        <li>
                                            {" "}
                                            <a>
                                                <i className='fab fa-pinterest-p'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className='fab fa-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            {" "}
                                            <a>
                                                <i className='fab fa-facebook-f'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='col-md-4 cont-foot'>
                                <h4>Contatos</h4>
                                <h5>
                                    {" "}
                                    <i className='fas fa-mobile'></i> (71)
                                    9411-5317
                                </h5>
                                <h5>
                                    {" "}
                                    <i className='fas fa-mobile'></i> (71)
                                    98387-5191
                                </h5>
                                <p>
                                    Rua Doutor Jose Peroba nº 325 Sala 905 Edf.
                                    Elite – Costa Azul – Ssa/Ba
                                </p>
                                <a href=''>lelproducaoevideo@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className='copy-right'>
                        <div className='container'>
                            <p>
                                2021 © All Rights Reserved | Designed and
                                Developed by{" "}
                                <a href='https://github.com/Psidom'>
                                    psidom.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </center>
        </footer>
    );
}

export default Footer;
