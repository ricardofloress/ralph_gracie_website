import styled from "styled-components";

export const ServicesContainer = styled.div`
    background: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 0 100px 0;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    padding: 0 50px;
    align-items: center;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content:flex-start;
    border-radius: 10px;
    max-height: 400px;
    box-shadow: 0 1px 10px 3px rgb(0 0 0 / 20%);
    transition: all 0.2s ease-in-out;
    border-bottom: 6px solid #000;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    object-fit: cover;
    height: 200px;
    width: 100%;
    margin-bottom: 25px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-width: 768px){
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 25px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 35px;
`;
