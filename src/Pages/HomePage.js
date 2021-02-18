import React from 'react';
import Contact from '../componets/Contact';
import Features from '../componets/Features';
import TopJumbo from '../componets/Jumbotron';
import Nav from '../componets/Nav';
import Offer from '../componets/Offer';
import Partners from '../componets/Partners';
import Profile from '../componets/Profile';
import Skill from '../componets/Skills';
import Testimonial from '../componets/Testimonial';

const Homepage = () => {

    return (
        <>
            <TopJumbo />
            <Nav />
            <Offer />
                <div className='mid-shape mr-auto ml-auto'><i class="fas fa-briefcase"></i></div>
            <Skill />
            <Features />
            <Profile />
            <Contact />
                <div className='quote-shape mr-auto ml-auto'><i class="fas fa-quote-left"></i></div>
            <Testimonial />
            <Partners />
        </>
    )
};

export default Homepage;