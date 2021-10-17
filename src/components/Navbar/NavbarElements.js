import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : '#transparent')}; 
    height: 80px;
   margin-top: -80px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    width: 100%;
    z-index: 1;
    max-width: 1100px;
    display: flex;
`;

export const NavLogo = styled(LinkR)`
    color: #ffffff;
    justify-self: flex-start;
    align-items: center;
    display: flex;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.5rem;
    height: 80%;

    @media screen and (max-width: 768px){
        margin-left: 0;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    display: flex;
    color: #fff;
    text-decoration: none;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #d74341;
    }
`;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
 

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #d74341;
    color: #ffffff;
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    border: none;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
 

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #ffffff;
        color: #d74341;
    }
`;



