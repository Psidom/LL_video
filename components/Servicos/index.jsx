import { ReactNode } from "react";

function Servicos({ children }) {
    return (
        <div className='services-container container-fluid'>
            <div className='container sess-in-cont'>
                <div className='session-title row'>
                    <h2>Nossos Serviços</h2>
                    <p></p>
                </div>
                <div className='sess-row row'>
                    <div className='col-md-4'>
                        <div className='serv-det'>
                            <center>
                                <h6>Acompanhamento de Drone</h6>
                            </center>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='serv-det'>
                            <center>
                                <h6>Acompanhamento em Solo</h6>
                            </center>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='serv-det'>
                            <center>
                                <h6>Imagens aéreas com Helicóptero</h6>
                            </center>
                        </div>
                    </div>
                </div>
                <div className='sess-row row'>
                    <div className='col-md-4'>
                        <div className='serv-det'>
                            <center>
                                <h6>Monitoramento de Obra</h6>
                            </center>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='serv-det'>
                            <center>
                                <h6>Edição</h6>
                            </center>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='serv-det'>
                            <center>
                                <h6>Computação Gráfica 2D / 3D</h6>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Servicos;
