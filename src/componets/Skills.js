import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img75 from '../assets/shapes75.svg';
import Img92 from '../assets/shapes92.svg';
import Img68 from '../assets/shapes68.svg';
import Img100 from '../assets/shapes100.svg';
import Img83 from '../assets/shapes83.svg';
import Img50 from '../assets/shapes50.svg';

const Skill = () => {
    const [imgs, setImgs] = useState([
        { id: 1, image: Img75, alt: '75perc', perc: '75' },
        { id: 2, image: Img92, alt: '92perc', perc: '92' },
        { id: 3, image: Img68, alt: '68perc', perc: '68' },
        { id: 4, image: Img100, alt: '100perc', perc: '100' },
        { id: 5, image: Img83, alt: '68perc', perc: '83' },
        { id: 6, image: Img50, alt: '50perc', perc: '50' }
    ]);

    const [skills, setSkills] = useState([
        { id: 1, skill: 'Web Design' },
        { id: 2, skill: 'Web Development' },
        { id: 3, skill: 'Speed Optimizatopn' },
        { id: 4, skill: 'Customer Support' },
        { id: 5, skill: 'Marketing' },
        { id: 6, skill: 'Advertisement' }
    ]);

    

    return (
        <Container className='bg-darker pb-4' fluid>
            <Row className='d-flex justify-content-center'>
                <div className="skills-shape-grp1">
                    <div className='shape1'></div>
                    <div className='shape2'></div>
                    <div className='shape3'></div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-uppercase skill-text'>our powerful <span>skills</span></h3>
                </div>
                <div className="skills-shape-grp2">
                    <div className='shape1'></div>
                    <div className='shape2'></div>
                    <div className='shape3'></div>
                </div>
            </Row>
            <Row className='d-flex justify-content-center pb-5'>
                <p className="skills-para">We're good and experienced at different things and areas and we promise about qulity of our works</p>
            </Row>
            <Container className='pb-3'>
                <Row>
                    {imgs.map(img => {
                        return (
                    <Col className='d-flex justify-content-center'>
                        <div className='skill-nums-box text-center'>
                            <h3 className=''>{img.perc}<span>%</span></h3>
                        </div>
                        <img src={img.image} alt={img.alt} />
                    </Col>
                        )
                    })}
                </Row>
                <Row className='mt-3'>
                    {skills.map(item => {
                        return (
                            <Col className='d-flex justify-content-center p-0' key={item.id}>
                                <h4 className='skill-title'>{item.skill}</h4>
                            </Col>
                        )
                    })}
                </Row>

            </Container>
        </Container>
    )

};

export default Skill;

