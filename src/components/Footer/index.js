import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, WebsiteRights, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <img src='/ralphGraciePortugalLogoHeaderWhite.png' alt="Ralph Gracie Portugal" height='100%' width='90px' />
                        </SocialLogo>
                        <WebsiteRights>
                            Ralph Gracie Portugal © {new Date().getFullYear()} Todos os direitos reservados.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='#' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com/ralphgracieportugal' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.youtube.com/channel/UC1W9Nhq_fWZuU5nnMUSZjyw' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>

        </FooterContainer>
    );
};

export default Footer;
