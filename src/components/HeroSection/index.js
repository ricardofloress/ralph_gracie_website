import React, { useState } from 'react';
import { HeroBg, HeroContainer, VideoBg, HeroBtnWrapper, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight, Overlay, HeroImg } from './HeroElements';
import { Button } from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <Overlay />
                <VideoBg autoPlay muted loop src='/videos/ralph_gracie_bjj_video.mp4' type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroImg src='/ralphGraciePortugalLogoHeaderWhite.png' alt="Ralph Gracie Portugal" height='100%' />
                <HeroH1>RALPH GRACIE PORTUGAL - Jiu-Jitsu</HeroH1>
                <HeroP>O lugar onde o corpo e a mente treinam juntos. </HeroP>
                <HeroBtnWrapper>
                    <Button href='https://wa.me/915256664' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' >
                        Marca a tua aula experimental {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
