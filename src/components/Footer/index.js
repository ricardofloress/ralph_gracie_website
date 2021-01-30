import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterLink, FooterLinkTitle, FooterLinksWrapper, FooterWrap, WebsiteRights, FooterLinksContainer, FooterLinkItems, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About Us
                            </FooterLinkTitle>
                            <FooterLink to='/signin'>
                                How it Works
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Testmonials
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Carrers
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Investors
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Terms of Service
                                </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About Us
                            </FooterLinkTitle>
                            <FooterLink to='/signin'>
                                How it Works
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Testmonials
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Carrers
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Investors
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Terms of Service
                                </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About Us
                            </FooterLinkTitle>
                            <FooterLink to='/signin'>
                                How it Works
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Testmonials
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Carrers
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Investors
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Terms of Service
                                </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About Us
                            </FooterLinkTitle>
                            <FooterLink to='/signin'>
                                How it Works
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Testmonials
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Carrers
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Investors
                                </FooterLink>
                            <FooterLink to='/signin'>
                                Terms of Service
                                </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <img src='/ralphGraciePortugalLogoHeaderWhite.png' alt="Ralph Gracie Portugal" height='100%' width='90px' />
                        </SocialLogo>
                        <WebsiteRights>
                            Ralph Gracie Portugal © {new Date().getFullYear()} Todos os direitos reservados.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
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
