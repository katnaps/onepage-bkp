import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Partners = () => {

    return (
        <Container className='bg-darker pt-4' fluid>
            <Container>
                <Row>
                    <div className='test-btn text-center mt-5'>
                        <button><i class="fas fa-play play-invert"></i></button>
                        
                        <button><i class="fas fa-play"></i></button>
                    </div>

                </Row>
            </Container>
        </Container>

    )
};

export default Partners;