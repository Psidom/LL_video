import { ReactNode } from "react";

function PorqueNos({ children }) {
    return (
        <section className='with-medical'>
            <div className='container'>
                <div className='row'>
                    <div className=' col-md-12 txtr'>
                        <center>
                            <h4>
                                Porque Nós
                                <br />
                                <span>L&L Produção Vídeo</span>
                            </h4>
                        </center>
                        <p>
                            A L&L Produção é uma produtora de vídeo com mais de
                            10 anos atuando no mercado de produções de Vt´s,
                            documentários, institucionais e vídeos técnicos, nos
                            especializamos na área de construção civil com
                            acompanhamento e monitoramento de obras.
                        </p>
                        <p>
                            Aliado a extensa experiencia de nossos colaboradores
                            buscamos sempre estar na frente nas inovações
                            tecnológicas fornecendo aos nossos clientes as
                            melhores e mais eficiente soluções.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PorqueNos;
