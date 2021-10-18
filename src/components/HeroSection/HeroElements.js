import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    height: 800px;
    padding: 0 30px;
    display:flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(50, 50, 50, 0.3);

`;

export const Overlay = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 73%);
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
    background: #232a34; 
`;


export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
    background: #232a34; 
`;

export const HeroContent = styled.div`
    z-index:3;
    position: absolute;
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const HeroH1 = styled.h1`
    color: #ffffff;
    font-size: 48px;
    text-align: center;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 960px){
        font-size: 40px;    
    }

    @media screen and (max-width: 480px){
        font-size: 32px;    
    }
`;

export const HeroImg = styled.img`
    height: 100%;
    margin-bottom: 24px;
`;


export const HeroP = styled.p`
    margin-top: 24px;
    color: #ffffff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;


    @media screen and (max-width: 960px){
        font-size: 24px;    
    }

    @media screen and (max-width: 480px){
        font-size: 18px;    
    }
`;


export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;    
    transition: all 0.5s ease-in-out;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    transition: all 0.5s ease-in-out;
    margin-left: 8px;
    font-size: 20px;    
`;

