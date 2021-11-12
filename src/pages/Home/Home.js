import React from 'react';
import Homeproduct from './Homeproduct/Homeproduct';
import ContactForm from './ContactForm/ContactForm';
import Benner from './Benner/Benner';
import RevewsHome from './Revews/ReviesHome';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <Homeproduct></Homeproduct>
            <RevewsHome/>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;