import React, { useState } from 'react';
import { HeroBg, HeroContainer, VideoBg, HeroBtnWrapper, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight, Overlay } from './HeroElements';
import { Button } from '../ButtonElement';

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
                <HeroH1>Ralph Gracie Portugal - Jiu-Jitsu</HeroH1>
                <HeroP>O lugar onde o corpo e a mente treinam juntos. </HeroP>
                <HeroBtnWrapper>
                    <Button to='/contactos' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' >
                        Experimenta {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
