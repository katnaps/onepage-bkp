import React from 'react';
import Features from '../componets/Features';
import TopJumbo from '../componets/Jumbotron';
import Nav from '../componets/Nav';
import Offer from '../componets/Offer';
import Skill from '../componets/Skills';

const Homepage = () => {

    return (
        <>
            <TopJumbo />
            <Nav />
            <Offer />
                <div className='mid-shape mr-auto ml-auto'><i class="fas fa-briefcase"></i></div>
            <Skill />
            <Features />
        </>
    )
};

export default Homepage;