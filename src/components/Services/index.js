import React from 'react';
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>As Nossas Aulas</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src='/images/jiu-jitsu_adultos.jpeg' />
                    <ServicesH2>Jiu-Jitsu Adultos</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='/images/jiu-jitsu_kids.png' />
                    <ServicesH2>Jiu-Jitsu Kids</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='/images/jiu-jitsu_aulas_particulares.jpeg' />
                    <ServicesH2>Aulas Particulares</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
    );
};

export default Services;
