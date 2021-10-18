import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
    position:fixed;
    width: 100%;
    z-index: 999;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;


export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        transition: 0.2s ease-in-out;
        color: #d74341;
    }
`;


export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #d74341;
    color: #ffffff;
    white-space: nowrap;
    padding: 16px 64px;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    border: none;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: 0.2s ease-in-out;
        background: #fff;
        color: #d74341;
    }
`;

export const WhatsLink = styled.a`
    width: 50px;
    height: 100%;
`;

export const WhatsLogo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;