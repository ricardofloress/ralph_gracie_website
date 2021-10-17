import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import About from '../components/About';
import Contacts from '../components/Contacts';

const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <Contacts/>
        </>
    );
};

export default Home;
