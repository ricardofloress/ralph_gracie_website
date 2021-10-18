import styled from "styled-components";

export const ContactsContainer = styled.div`
    background: #000;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 225px 0;
`;

export const ContactsWrapper = styled.div`
    display: flex;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0px 24px;    
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        padding: 25px 24px;    
        flex-direction: column;
    }
`;

export const ContactsElement = styled.div`
    display: flex;
    z-index: 1;
    width: 50%;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;


export const Map = styled.div`
    height: 300px;
    width: 300px;
    overflow: hidden;
    border-radius: 100%;
    align-self: end;

    @media screen and (max-width: 768px){
        margin-top: 50px;
        align-self: center;
    }
`;

export const ContactsHeading = styled.h1`
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 24px;
    align-self: flex-start;

    @media screen and (max-width:768px){
        font-size:  32px;
    } 

    &:after{
        background-color: #fff;
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        margin-top: 15px;
    }
`;

export const ContactsInfo = styled.p`
    align-self: flex-start;
    color: ${({ darkText }) => (darkText ? '#010606' : '#ffffff')};
    font-size: 18px;
    line-height: 30px;

    @media screen and (max-width:768px){
        font-size:  16px;
        align-self: flex-start;
    } 
`;

export const ToLink = styled.a`
    color: ${({ darkText }) => (darkText ? '#010606' : '#ffffff')};
    font-size: 18px;
    text-decoration: none;
    transition: all 0.2 ease;
    
    @media screen and (max-width: 768px){
        font-size: 16px;
    }

    &:hover{
        color: #d74341;
        transition: all 0.2 ease;
    }
`;