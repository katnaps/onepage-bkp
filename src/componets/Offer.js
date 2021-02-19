import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

const Offer = () => {
    const [offers, setOffer] = useState([
        { id: 1, title: 'Responsie & Multipurpose', text: 'Velit occaecat tempor reprehenderit do commodo ad aute pariatur.' },
        { id: 2, title: 'Easy Customization', text: 'Excepteur proident proident non magna enim do et exercitation nisi magna ex.' },
        { id: 3, title: 'Awesome Friendly Support', text: 'Duis Lorem exercitation elit et qui ut cupidatat reprehenderit magna deserunt dolore minim fugiat.' }
    ]);

    return (
        <Container>
            <Row className='justify-content-center'>
                <div className='offer-container'>
                    <div className='offer-content'>
                        <div className='offer-line-grp1'>
                            <hr className='offer-line1' />
                            <hr className='offer-line1' />
                        </div>
                        <div className='offer-shape-sp'>
                            <div className="offer-shape-grp1">
                                <div className='shape1'></div>
                                <div className='shape2'></div>
                                <div className='shape3'></div>
                            </div>
                        </div>
                        <h3 className='offer-title'>what we <span>offer</span></h3>
                        <div className='offer-shape-sp'>
                            <div className="offer-shape-grp2">
                                <div className='shape1'></div>
                                <div className='shape2'></div>
                                <div className='shape3'></div>
                            </div>
                        </div>
                        <div className='offer-line-grp2'>
                            <hr className='offer-line2' />
                            <hr className='offer-line2' />
                        </div>
                    </div>
                    <p>We offer our customers the best servies & solutions, this is our main services list</p>
                </div>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center mt-4 mb-3' sm>
                    <div className='circle-grey'>
                        <i class="fas fa-desktop"></i>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center mt-4 mb-3' sm>
                    <div className='circle-green'>
                        <i class="fas fa-puzzle-piece"></i>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center mt-4 mb-3' sm>
                    <div className='circle-grey'>
                        <i class="far fa-life-ring"></i>
                    </div>
                </Col>
            </Row>
            <Row className='flex-nowrap'>
                {offers.map(item => {
                    return (
                        <Col key={item.id} sm>
                            <h3 className='offer-card-title text-center'>{item.title}</h3>
                            <p className='offer-text text-center'>{item.text}</p>
                        </Col>
                    )
                })}
            </Row>
            <Row className='mb-5'>
                <Col className='d-flex justify-content-center'>
                    <div className='offer-btn-align'>
                        <div className='offer-btns'>
                            <Button variant="default" className='offer-btn'>read more</Button>
                        </div>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <div className='offer-btn-align'>
                        <Button variant='default' className='offer-btn'>read more</Button>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <div className='offer-btn-align'>
                        <Button variant="default" className='offer-btn'>read more</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Offer;

