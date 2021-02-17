import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

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
                        <div className="offer-shape-grp1">
                            <div className='shape1'></div>
                            <div className='shape2'></div>
                            <div className='shape3'></div>
                        </div>
                        <h3 className='offer-title'>what we <span>offer</span></h3>
                        <div className="offer-shape-grp2">
                            <div className='shape1'></div>
                            <div className='shape2'></div>
                            <div className='shape3'></div>
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
                <Col sm>
                    <div className='circle-grey circle-offer'>
                        {/* <i class="fas fa-desktop"></i> */}
                        </div>
                </Col>
                <Col sm>
                    <div className='circle-green circle-offer'>
                        {/* <i class="fas fa-puzzle-piece"></i> */}
                        </div>
                </Col>
                <Col sm>
                    <div className='circle-grey circle-offer'>
                        {/* <i class="far fa-life-ring"></i> */}
                        </div>
                </Col>
            </Row>
            <Row className='flex-nowrap'>
                {offers.map(item => {
                    return (
                        <Col key={item.id} sm>
                            <h3 className='offer-card-title'>{item.title}</h3>
                            <p className='offer-text'>{item.text}</p>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
};

export default Offer;

