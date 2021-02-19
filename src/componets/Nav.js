import React, { useState } from 'react';

import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import logo from '../assets/logo-apd.svg';


const Navhead = () => {
    const [isSticky, setSticky] = useState(false);

    const height = (window.innerHeight - 160)
    const changeBackground = () => {
        if (window.scrollY >= height) {
            setSticky(true)
        } else {
            setSticky(false)

        }
    };

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    window.addEventListener('scroll', changeBackground);



    return (
        <Navbar className={isSticky ? 'shadow-sm sticky' : 'shadow-sm'} expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} width='80' height='80' className='d-incline-block align-top' alt='apd logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="nav-links" variant='light' href="#home">HOME</Nav.Link>
                        <Nav.Link className="nav-links" href="#portfolio">Porfolio</Nav.Link>
                        <Nav.Link className="nav-links" href="#blog">Blog</Nav.Link>
                        <Nav.Link className="nav-links" href="#pages">Pages</Nav.Link>
                        <Nav.Link className="nav-links" href="#features">Features</Nav.Link>
                        <Nav.Link className="nav-links" href="#menu">Mega Menu</Nav.Link>
                        <Nav.Link className="nav-links" href="#contact">Contact</Nav.Link>

                        <button className='search-btn search-icon'>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                transform="scale(-1, 1)"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Navhead;