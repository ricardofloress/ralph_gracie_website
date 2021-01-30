import React from 'react';
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src='/images/jiu-jitsu-black-white.jpg' />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='/images/jiu-jitsu-grapling.jpg' />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='/images/jiu-jitsu-kids.jpg' />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
    );
};

export default Services;
