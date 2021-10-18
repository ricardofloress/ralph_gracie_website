import React, { useState } from 'react';
import { HeroBg, HeroContainer, ImgBg, HeroBtnWrapper, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight, Overlay, HeroImg } from './HeroElements';
import { ButtonLink } from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <Overlay />
                {/* 
                    <VideoBg autoPlay muted loop src='/videos/ralph_gracie_bjj_video.mp4' type='video/mp4' />*/}
                <ImgBg src='/images/ralph_gracie_portugal_space.jpeg'/>
            </HeroBg>
            <HeroContent>
                <HeroImg src='/ralphGraciePortugalLogoHeaderWhite.png' alt="Ralph Gracie Portugal" height='100%' />
                <HeroH1>RALPH GRACIE PORTUGAL - Jiu&#8209;Jitsu</HeroH1>
                <HeroP>O lugar onde o corpo e a mente treinam juntos. </HeroP>
                <HeroBtnWrapper>
                    <ButtonLink href='https://wa.me/+351915256664' target='_blank' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' >
                        Marca a tua aula experimental {hover ? <ArrowForward /> : <ArrowRight />}
                    </ButtonLink>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
