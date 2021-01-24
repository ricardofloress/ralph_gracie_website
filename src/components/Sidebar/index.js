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
                    <SidebarLink to='about'>About</SidebarLink>
                    <SidebarLink to='about'>Discover</SidebarLink>
                    <SidebarLink to='services'>Services</SidebarLink>
                    <SidebarLink to='signup'>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='signin'>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;

