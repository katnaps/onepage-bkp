import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img75 from '../assets/shapes75.svg';
import Img92 from '../assets/shapes92.svg';
import Img68 from '../assets/shapes68.svg';
import Img100 from '../assets/shapes100.svg';
import Img83 from '../assets/shapes83.svg';
import Img50 from '../assets/shapes50.svg';

const Skill = () => {
    const [imgs] = useState([
        { id: 1, image: Img75, alt: '75perc', perc: '75', skill: 'Web Design' },
        { id: 2, image: Img92, alt: '92perc', perc: '92', skill: 'Web Development' },
        { id: 3, image: Img68, alt: '68perc', perc: '68', skill: 'Speed Optimizatopn' },
        { id: 4, image: Img100, alt: '100perc', perc: '100', skill: 'Customer Support' },
        { id: 5, image: Img83, alt: '68perc', perc: '83', skill: 'Marketing' },
        { id: 6, image: Img50, alt: '50perc', perc: '50', skill: 'Advertisement' }
    ]);


    return (
        <Container id='skills' className='bg-darker pb-4' fluid>
            <Row className='d-flex justify-content-center pt-5'>
                <div className='skill-shape-sp'>
                    <div className="skills-shape-grp1">
                        <div className='shape1'></div>
                        <div className='shape2'></div>
                        <div className='shape3'></div>
                    </div>
                </div>
                <div className='mt-4'>
                    <h3 className='text-uppercase skill-text'>our powerful <span>skills</span></h3>
                </div>
                <div className='skill-shape-sp'>
                    <div className="skills-shape-grp2">
                        <div className='shape1'></div>
                        <div className='shape2'></div>
                        <div className='shape3'></div>
                    </div>
                </div>
            </Row>
            <Row className='d-flex justify-content-center'>
                <p className="skills-para">We're good and experienced at different things and areas and we promise about qulity of our works</p>
            </Row>
            <Container className='pb-3'>
                <Row className=''>
                    {imgs.map(img => {
                        return (
                            <Col className='skill-position' key={img.id}>
                                <div className='skill-nums-box'>
                                    <h3 className=''>{img.perc}<span>%</span></h3>
                                </div>
                                <img src={img.image} alt={img.alt} />
                                <div className='skill-title'>
                                    <h4>{img.skill}</h4>
                                </div>
                            </Col>
                        )
                    })}
                </Row>

            </Container>
        </Container>
    )

};

export default Skill;

