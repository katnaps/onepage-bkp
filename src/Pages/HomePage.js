import React from 'react';
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

        </>
    )
};

export default Homepage;