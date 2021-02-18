import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {

    return (
        <Container className='bg-footer pt-5 pb-4' fluid>
            <div className='text-center footer-text mt-3'>
            <p>Copyright &copy; 2021 APD Digital Services Sdn Bhd, All Rights Reserved.</p>
            </div>
        </Container>
    )
};

export default Footer;