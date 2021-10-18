import React from 'react';
import { ContactsContainer, ContactsElement, ContactsHeading, ContactsWrapper, Map, ToLink, ContactsInfo } from './ContactsElements';

const Contacts = () => {
    return (
        <ContactsContainer id='contacts'>
            <ContactsWrapper>
                <ContactsElement>
                    <ContactsHeading lightText>Contactos</ContactsHeading>
                    <ContactsInfo>
                        <strong>Endereço:</strong> <br />Rua Dr. Afonso Cordeiro 123, 4450-005 Matosinhos
                        <br />
                        <br />
                        <strong>Telefone:</strong> <br /><ToLink href="tel:+351 968 320 127">+351 968 320 127</ToLink>
                        <br />
                        <br />
                        <strong>E-mail:</strong> <br /><ToLink href="mailto:ralphgracieportugal@gmail.com">ralphgracieportugal@gmail.com</ToLink>
                    </ContactsInfo>

                </ContactsElement>
                <ContactsElement>
                    <Map>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.855350110227!2d-8.687823984580593!3d41.18132207928362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246fb0c15733ff%3A0x3f5684a77585b7f2!2sRalph%20Gracie!5e0!3m2!1spt-PT!2spt!4v1634490487614!5m2!1spt-PT!2spt" style={{ border: 0, height: '100%' }} allowFullScreen loading="lazy" />
                    </Map>
                </ContactsElement>
            </ContactsWrapper>
        </ContactsContainer>
    );
};

export default Contacts;
