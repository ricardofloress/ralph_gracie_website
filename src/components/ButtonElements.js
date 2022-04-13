import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
   border-radius: 50px;
   background: ${({ primary }) => (primary ? '#ffffff' : '#010606')}; 
    color: ${({ dark }) => (dark ? '#010606' : '#ffffff')}; ;
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')}; 
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')}; 
    outline: none;
    cursor: pointer;
    border: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    box-shadow: 3px 6px 12px 3px rgb(255 255 255 / 58%);
 
    &:hover{
        transform: translateY(-5px);
        transition: all 0.3s ease-in-out;
        background: ${({ primary }) => (primary ? '#ffffff' : '#d74341')}; 
    }
`;


export const ButtonLink = styled.a`
   border-radius: 50px;
    background: ${({ primary }) => (primary ? '#ffffff' : '#010606')}; 
    color: ${({ dark }) => (dark ? '#010606' : '#ffffff')}; ;
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')}; 
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')}; 
    outline: none;
    cursor: pointer;
    border: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    box-shadow: 3px 6px 12px 3px rgb(255 255 255 / 58%);
 
    &:hover{
        transform: translateY(-5px);
        transition: all 0.3s ease-in-out;
        background: ${({ primary }) => (primary ? '#ffffff' : '#d74341')}; 
    }
`;