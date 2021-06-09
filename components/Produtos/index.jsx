import { ReactNode } from "react";

function Produtos({ children }) {
    return (
        <div className='key-features container-fluid'>
            <div className='container'>
                <div className='session-title row'>
                    <h2>Nossos Produtos</h2>
                    <p>
                        Garantido que as Obras Executadas por eles possam além
                        de ficar no seu acervo fiquem na sua história
                    </p>
                </div>
                <div className='key-row row'>
                    <div className='col-md-3'>
                        <div className='key-single'>
                            <center>
                                <i className='fas fa-hourglass-half'></i>
                            </center>
                            <center>
                                <h6>Monitoramento Timelapse</h6>
                            </center>
                            <center>
                                <p>
                                    O equipamento de câmera timelapse consiste
                                    em uma câmera blindada, impermeável que
                                    captura imagens em períodos
                                    pré-determinados, conforme a necessidade e
                                    transformação do local.
                                </p>
                            </center>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='key-single'>
                            <center>
                                <i className='fas fa-plane'></i>
                            </center>
                            <center>
                                <h6>Acompanhamento com drone</h6>
                            </center>
                            <center>
                                <p>
                                    Captação de imagens aéreas através de drone
                                    profissional (inspire 1) com câmera com
                                    resolução em 4k a ser realizada por uma
                                    equipe composta por profissionais com larga
                                    experiência.
                                </p>
                            </center>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='key-single'>
                            <center>
                                <i className='fas fa-video'></i>
                            </center>
                            <center>
                                <h6>Vídeo Monitoramento</h6>
                            </center>
                            <center>
                                <p>
                                    O Equipamento de câmera de vídeo
                                    monitoramento consiste em uma câmera de
                                    transmissão remota que fara transmissão
                                    durante 24hrs por todo o período da obra.{" "}
                                </p>
                            </center>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='key-single'>
                            <center>
                                <i className='far fa-folder-open'></i>
                            </center>
                            <center>
                                <h6>Relatório em Vídeo</h6>
                            </center>
                            <center>
                                {" "}
                                <p>
                                    Com visitas periódicas, nossa equipe captará
                                    imagens de todas as fases evolutivas da obra
                                    até o momento da sua conclusão, editando
                                    periodicamente relatório em vídeo e no final
                                    da obra um vídeo síntese de todo período da
                                    obra.
                                </p>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Produtos;
