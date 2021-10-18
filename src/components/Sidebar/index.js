import React from 'react';
import { CloseIcon, SidebarContainer, Icon, SideBtnWrap, SidebarLink, WhatsLogo, WhatsLink, SidebarWrapper, SidebarMenu } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>Sobre</SidebarLink>
                    <SidebarLink to='mestres' onClick={toggle}>Mestres</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Aulas</SidebarLink>
                    <SidebarLink to='contacts' onClick={toggle}>Contactos</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <WhatsLink href='https://wa.me/+351915256664' target='_blank' >
                        <WhatsLogo src='/images/whatapp-logo.png' alt="Ralph Gracie Portugal Whatsapp" />
                    </WhatsLink>
                    {/*<SidebarRoute to='signin'>
                        Sign In
    </SidebarRoute>*/}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;

