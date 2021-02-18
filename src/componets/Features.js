import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Features = () => {
    // Icons Row 1
    const faDesktop = <i class="fas fa-desktop fa-xs feat-icon"></i>;
    const faPuzzle = <i class="fas fa-puzzle-piece fa-xs feat-icon"></i>;
    const faLifeRing = <i class="far fa-life-ring fa-xs feat-icon"></i>;
    const faStar = <i class="fas fa-star fa-xs feat-icon"></i>
    const faCart = <i class="fas fa-shopping-cart fa-xs feat-icon"></i>
    const faClipboard = <i class="fas fa-clipboard-list fa-xs feat-icon"></i>

    const [feat1, setFeat1] = useState([
        {
            id: 1,
            title: 'Responsive & Multipurpose',
            subtitle: 'Desktop, Tablets & Phones',
            text: 'Consectetur eiusmod ut culpa commodo aute.',
            icon: faDesktop
        },
        {
            id: 2, title: 'Easy Customization',
            subtitle: 'One Click Demo Content Installation',
            text: 'Quis commodo nostrud sint culpa consectetur et aute Lorem excepteur amet minim esse.',
            icon: faPuzzle
        },
        {
            id: 3,
            title: 'Unlimited Features',
            subtitle: 'Shortcodes, Typography & Different Layouts',
            text: 'Amet sit nulla nostrud non ea proident nulla est quis.',
            icon: faStar
        },

    ]);

    const [feat2, setFeat2] = useState([
        {
            id: 1,
            title: 'Clean & Modular Coding',
            subtitle: '100% Clean, Valid & Well-Commented Coding',
            text: 'Amet laborum laboris minim nisi.',
            icon: faClipboard
        },
        {
            id: 2,
            title: 'The Best E-Commerce Solutions',
            subtitle: 'WooCommerce Fully Intergration',
            text: 'Aute sint deserunt do ut voluptate culpa ea sunt labore duis.',
            icon: faCart
        },
        {
            id: 3,
            title: 'Awesome Friendly Support',
            subtitle: 'Free Lifetime Support & Updates',
            text: 'Anim esse cillum proident excepteur.',
            icon: faLifeRing
        }
    ]);



    return (
        <Container fluid>
            <Container className='mt-3'>
                <Row className='pt-5 mb-3'>

                    {feat1.map(item => {
                        return (
                            <>

                                <Col className='d-flex justify-content-end col-1'>
                                    <div className='front-bg'>{item.icon}</div>
                                    <div className='back-bg'></div>
                                </Col>

                                <Col className='col-3 feat-text'>
                                    <h4>{item.title}</h4>
                                    <span>{item.subtitle}</span>
                                    <p>{item.text}</p>
                                </Col>
                            </>
                        )
                    })}
                    </Row>

                    <Row className='mb-5'>
                        {feat2.map(item => {
                            return (
                                <>

                                    <Col className='d-flex justify-content-end col-1'>
                                        <div className='front-bg'>{item.icon}</div>
                                        <div className='back-bg'></div>
                                    </Col>

                                    <Col className='col-3 feat-text'>
                                        <h4>{item.title}</h4>
                                        <span>{item.subtitle}</span>
                                        <p>{item.text}</p>
                                    </Col>
                                </>
                            )
                        })}
                    </Row>
            </Container>
        </Container>
    )
};

export default Features;

