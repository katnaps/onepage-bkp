import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Vivid from '../assets/vividways.svg';
import Hob from '../assets/hobnob.svg';
import Burn from '../assets/burnabox.svg';
import Scent from '../assets/scenthound.svg';

const Partners = () => {

    return (
        <Container className='bg-darker pt-4 pb-5' fluid>
            <Container>
                <Row>
                        <div className='partner-img partner-btn mt-5'>
                        <button><i className="fas fa-play play-invert"></i></button>
                        <img src={Vivid} alt='Vivid logo' />
                        <img src={Hob} alt='Hobnob logo' /> 
                        <img src={Burn} alt='Burnabox logo' />
                        <img src={Scent} alt='Scenthound logo' />
                        <button><i className="fas fa-play"></i></button>
                        </div>
                </Row>
            </Container>
        </Container>

    )
};

export default Partners;