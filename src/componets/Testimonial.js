import React from 'react';
import { Container } from 'react-bootstrap';

const Testimonial = () => {

    return (
        <Container className='test-container pt-4' fluid>
            <Container className='pt-5 pb-5'>
                <div className='quote-title mr-auto ml-auto text-center'>
                    <p>Alexis Simpson <span>- CEO & Developer</span></p>
                </div>
                <div className='quote-text text-center mt-4'>
                    <p><span>"</span>In amet quis aliqua quis aute sit esse occaecat tempor non pariatur incididunt.<span>"</span></p>
                </div>

                <div className='test-btn text-center mt-5'>
                    <button><i className="fas fa-play play-invert"></i></button>
                    <button><i className="fas fa-play"></i></button>
                </div>
            </Container>
        </Container>
    )
};

export default Testimonial;