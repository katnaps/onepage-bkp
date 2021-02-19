import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Profile = () => {
    const [profiles] = useState([
        { id: 1, name: 'Alexis Simpson', job: 'CEO & Developer', email: 'a.simpson@unique.com', phone: '+1 911 (77) 222-1111' },
        { id: 2, name: 'Steven Cole', job: 'User Interface Designer', email: 's.cole@unique.com', phone: '+1 911 (77) 222-1111' },
        { id: 3, name: 'Frank Piener', job: 'Sales Manager', email: 'f.piener@unique.com', phone: '+1 911 (77) 222-1111' },
        { id: 4, name: 'Ashley Lennon', job: 'IT Specialist', email: 'a.lennon@unique.com', phone: '+1 911 (77) 222-1111' }
    ])

    return (
        <Container id='profiles' className='bg-darker pt-4' fluid>
            <Container className='pb-5'>
                <Row className='pb-5 pt-5 profile-cards-container'>
                    {profiles.map(item => {
                        return (
                            <Col className='profile-cards' key={item.id}>
                                <div className='card border-0'>
                                    <div className='profile-bg rounded-top'>
                                        <div className='social'>
                                            <div className='soc-shape'>
                                                <i className="fab fa-facebook-f social-icon"></i>
                                            </div>
                                            <div className='soc-shape'>
                                                <i className="fab fa-twitter social-icon"></i>
                                            </div>
                                            <div className='soc-shape'>
                                                <i className="fab fa-google-plus-g social-icon"></i>
                                            </div>
                                            <div className='soc-shape'>
                                                <i className="fab fa-vimeo-v social-icon"></i>
                                            </div>
                                            <div className='soc-shape'>
                                                <i className="fas fa-basketball-ball social-icon"></i>
                                            </div>
                                        </div>
                                        <div className='profile-name'><p>{item.name}</p></div>
                                    </div>
                                    <div className='card-body text-center profile-text border-left border-right border-bottom rounded-bottom'>
                                        <p className='card-text'>{item.job}</p>
                                        <hr />
                                        <div className='profile-text'>
                                            <i className="fas fa-envelope"></i>
                                            <span className='profile-email'>{item.email}</span>
                                        </div>
                                        <div className='profile-text'>
                                            <i className="fas fa-phone-alt"></i>
                                            <span>{item.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
                <button className='profile-btn rounded pt-3 pb-3'>view all works</button>
            </Container>
        </Container>
    )
};

export default Profile;