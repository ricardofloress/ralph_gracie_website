import React from 'react';
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>As Nossas Aulas</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesH2>Jiu-Jitsu Adultos</ServicesH2>
                    <ServicesP>As nossas aulas são direcionadas para todas as pessoas e todos os níveis, a finalidade das aulas é a instrução das técnicas e conceitos independentemente da faixa.</ServicesP>
                    <ServicesIcon src='/images/jiu-jitsu_adultos.jpeg' />
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Jiu-Jitsu Kids</ServicesH2>
                    <ServicesP>Num ambiente divertido as crianças irão aprender a arte, bem como adquirir valências como o auto-controle, confiança e disciplina.</ServicesP>
                    <ServicesIcon src='/images/jiu-jitsu_kids.png' />

                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Aulas Particulares</ServicesH2>
                    <ServicesP>As aulas privadas permitem uma evolução mais rápida do praticante devido atenção total do professor, o aluno irá aprimorar a sua técnica.</ServicesP>
                    <ServicesIcon src='/images/jiu-jitsu_aulas_particulares.jpeg' />

                </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
    );
};

export default Services;
