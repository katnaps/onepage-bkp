import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    const [occupation, setOccupation] = useState(['Student', 'Professional', 'Doctor', 'Public Servant']);

    return (
        <Container className='mt-3 pt-4 pb-4' fluid>
            <Container className='pt-5'>
                <h1 className='contact-title mb-5'>Register Your Interest</h1>
                <div className='contact-container'>
                    <form>
                        <Row className='m-3'>
                            <div className='d-flex w-100'>
                                <Col className='d-flex flex-column form-space'>
                                    <input type='text' value='' placeholder='Name' />

                                    <input type='email' value='' placeholder='Email Address' />

                                    <textarea rows='5' cols='40' value='' placeholder='Message...'>
                                    </textarea>
                                </Col>
                                <Col className='d-flex flex-column form-space'>
                                    <select>
                                        <option disabled selected>Occupation</option>
                                        {occupation.map(item => {
                                            return (
                                                <option value={item}>{item}</option>
                                            )
                                        })};
                                    </select>
                                    <input type='number' value='' placeholder='Contact No' />
                                </Col>
                            </div>
                        <input className='submit-btn' type='submit' value='SUBMIT MESSAGE' />
                        </Row>
                    </form>
                </div>
            </Container>
        </Container>
    )
};

export default Contact;