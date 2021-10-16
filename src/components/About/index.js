import React from 'react';
import { AboutContainer, AboutContent, AboutMVGElement, AboutMVGInfo, AboutMVGTitle, AboutMVGWrapper, AboutTitle, AboutWrapper } from './AboutElements';

const About = () => {
    return (
        <AboutContainer id='about'>
            <AboutWrapper>
                <AboutTitle>
                    Quem somos?
                </AboutTitle>
                <AboutContent>
                    Inaugurada em 2019, a Ralph Gracie Portugal foi criada com o propósito de trazer para Portugal não só o Jiu-jitsu brasileiro enquanto desporto e arte marcial, mas sim como FILOSOFIA DE VIDA, proporcionando o bem estar físico, mental e emocional do praticante.
                    De forma divertida, através de atividades físicas simples e lúdicas, a nossa escola visa sempre melhorar o condicionamento físico, desenvolvimento muscular e fortalecimento das articulações, agregando conceitos de mobilidade, defesa pessoal, judo e técnicas do jiu-jitsu competição com e sem kimono.
                    A nossa sede é em São Francisco/Califórnia-USA e pela nossa escola já passaram mais de 10.000 alunos no mundo inteiro, das mais variadas idades e objetivos.
                    Mundialmente sob o comando do Mestre Ralph Gracie, neto do Grande Mestre Carlos Gracie, criador do Brasilian Jiu-jitsu, a nossa escola tem aulas padronizadas, elaboradas com todo carinho e técnica, das quais muitas vezes são adaptadas a demandas individuais, pois acreditamos que o Jiu-jitsu é para todos.
                    Possuímos professores treinados e altamente qualificados.
                </AboutContent>
                <AboutMVGWrapper>

                    <AboutMVGElement>
                        <AboutMVGTitle>
                            Visão
                        </AboutMVGTitle>
                        <AboutMVGInfo>
                            Estar sempre entre as melhores escolas de Jiu-jitsu do Mundo, tornando-se uma referência no mercado Português do Jiu-jitsu e do Fitness.
                        </AboutMVGInfo>
                    </AboutMVGElement>

                    <AboutMVGElement>
                        <AboutMVGTitle>
                            Missão
                        </AboutMVGTitle>
                        <AboutMVGInfo>
                            Proporcionar aos nossos clientes/sócios uma experiência extraordinária por meio de um alto nível de atendimento, serviço e inovação.
                        </AboutMVGInfo>
                    </AboutMVGElement>

                    <AboutMVGElement>
                        <AboutMVGTitle>
                            Valores
                        </AboutMVGTitle>
                        <AboutMVGInfo>
                            Compromisso com os c lientes no que se refere a: Segurança, bem-estar, resultados, recursos, empatia, ética, transparência e inovação.
                        </AboutMVGInfo>
                    </AboutMVGElement>

                </AboutMVGWrapper>
            </AboutWrapper>
        </AboutContainer>
    );
};

export default About;
