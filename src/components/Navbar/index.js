import React, { useState, useEffect } from 'react';
import { Nav, NavLogo, NavbarContainer, MobileIcon, NavItem, NavLinks, NavMenu, NavBtn, NavBtnLink, WhatsLink, WhatsLogo } from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);


    return (
        <>
            <IconContext.Provider value={{ color: '#ffffff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            <img src='/ralphGraciePortugalLogoHeaderWhite.png' alt="Ralph Gracie Portugal" height='100%' />
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sobre</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='mestres' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Professores</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Aulas</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='contacts' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contactos</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <WhatsLink href='https://wa.me/+351915256664' target='_blank' >
                                <WhatsLogo src='/images/whatapp-logo.png' alt="Ralph Gracie Portugal Whatsapp"/>
                            </WhatsLink>
                           {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink>*/} 
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
