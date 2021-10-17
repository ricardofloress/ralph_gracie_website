import styled from "styled-components";

export const AboutContainer = styled.div`
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#010606')};
    background-image: linear-gradient(rgb(0 0 0 / 68%),rgb(0 0 0)),url("/images/ralph_gracie_portugal_space.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width:768px){
        padding: 50px 0 25px 0;    
    } 
`;

export const AboutWrapper = styled.div`
    display: flex;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 75px 24px;    
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 768px){
        padding: 25px 24px;    
    }
`;

export const AboutTitle = styled.h1`
    font-size: 2.5rem;
    color: #ffffff;
    margin-bottom: 64px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 2rem;
        align-self: flex-start;
    }
`;

export const AboutContent = styled.p`
    color: ${({ darkText }) => (darkText ? '#010606' : '#ffffff')};
    font-size: 18px;
    line-height: 35px;
    margin-bottom: 100px;
    text-align: left;

    @media screen and (max-width: 768px){
        line-height: 24px;
        font-size: 16px;
    }
`;

export const AboutMVGWrapper = styled.div`
    display: flex;
    width: 100%; 
    align-items: baseline;
    justify-content: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const AboutMVGElement = styled.div`
    padding: 0 20px;
    width: 33%;
    position: relative;
    height: 100%;


    &:nth-child(3) {
        &::before {
            display: none;
        }
    }

    &::before {
        position: absolute;
        right: 0;
        content: '';
        width: 1px;
        height: 100%;
        background-color: white;
        opacity: 0.5;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        margin-bottom: 40px;
        padding: 0;
        &::before {
            display: none;
        }
    }
`;

export const AboutMVGTitle = styled.h2`
    font-size: 1.5rem;
    color: #ffffff;
    text-align: left;
    margin-bottom: 24px;

    @media screen and (max-width: 768px){
        font-size: 1.7rem;
        margin-bottom: 15px;

    }
`;

export const AboutMVGInfo = styled.p`
    color: ${({ darkText }) => (darkText ? '#010606' : '#ffffff')};
    font-size: 18px;
    line-height: 35px;
    margin-bottom: 15px;
    text-align: left;

    @media screen and (max-width: 768px){
        line-height: 24px;
        font-size: 16px;
    }
`;