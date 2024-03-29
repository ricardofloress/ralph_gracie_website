import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background: #101522;

`;

export const FooterWrap = styled.div`
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;    
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    
    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #ffffff; 

    @media screen and (max-width: 420px){
        margin: 0px;
        width: 100%auto;
        padding: 10px;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 16px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: #ffffff; 
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: #d74341;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1100px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto ;
    padding: 0 0px;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: #ffffff; 
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-weight: bold;

    @media screen and (max-width: 820px){
        margin-bottom: 30px;
    }
`;

export const WebsiteRights = styled.small`
    color: #ffffff; 
    text-align: center;

    @media screen and (max-width: 820px){
        margin-bottom: 30px;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 140px;
`;

export const SocialIconLink = styled.a`
    color: #ffffff; 
    font-size:24px;

    &:hover{
        color: #d74341;
        transition: 0.3s ease-out;
    }
`;
