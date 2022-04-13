import styled from "styled-components";

export const ServicesContainer = styled.div`
    background: #000;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px 0;
`;

export const ServicesWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    padding: 0 24px;
    align-items: center;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 24px;
    }
`;

export const ServicesCard = styled.div`
    position: relative;
    background: #000;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    height: 400px;
    transition: all 0.2s ease-in-out;
    border-bottom: 6px solid #d74341;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    top: 0;
    opacity: 0.5;
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    margin-bottom: 25px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 768px){
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 25px;
    color: #fff;
    z-index: 1;

    &:after{
        background-color: #fff;
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        margin-top: 15px;
    }
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    margin: 0 20px 35px 20px;
    color: #fff;
    z-index: 1;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`;

export const ServicesButtonWrapper = styled.div`
    margin: 90px 0 0 0;
`;