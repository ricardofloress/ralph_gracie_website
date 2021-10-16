import React from 'react';
import { CloseIcon, SidebarContainer, Icon, SideBtnWrap, SidebarLink, SidebarRoute, SidebarWrapper, SidebarMenu } from './SidebarElements';

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
                    <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='signin'>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;

