import React from 'react';
import Services from '../Services/Services';
import Banner from '../Banner/Banner'
import PreviousWork from '../PreviousWork/PreviousWork';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <PreviousWork></PreviousWork>
        </div>
    );
};

export default Home;