import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import About from '../components/About';
import Contacts from '../components/Contacts';
import Modal from '../components/Modal/Modal';
import styled from "styled-components";

export const HorarioImg = styled.img`
    height: 100%;
    border-radius: 13px;

    @media screen and (max-width: 768px){
        height: unset;
        width: 100%;
    }
`;

const Home = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
        if (!modalOpen)
            disableScrolling();
        else
            enableScrolling();

    };

    const disableScrolling = () => {
        let x = window.scrollX;
        let y = window.scrollY;
        console.log(x, y);
        window.onscroll = () => { window.scrollTo(x, y); };
    };

    const enableScrolling = () => {
        window.onscroll = () => { };
    };

    return (
        <>
            <HeroSection />
            <About />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services toggleModalProp={toggleModal} />
            <Contacts />
            {modalOpen && <Modal toggleModalProp={toggleModal}>
                <HorarioImg src='/images/horario_ralph_gracie_portugal.jpg' />
            </Modal>}
        </>
    );
};

export default Home;
