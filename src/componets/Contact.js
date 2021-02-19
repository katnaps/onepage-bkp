import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Contact = () => {
    const [job] = useState([
        {
            id: 1,
            value: 'Student'
        },
        {
            id: 2,
            value: 'Professional'
        },
        {
            id: 3,
            value: 'Doctor'
        },
        {
            id: 4,
            value: 'Lawyer'
        },
        {
            id: 5,
            value: 'Other'
        }
    ]);

    const [info, setInfo] = useState([{}]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setInfo([
            {
                name: name,
                email: email,
                occupation: occupation,
                number: number,
                message: message
            }
        ]);

        toast.dark('Your Message has been sent!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });


        console.log(info)
    };


    return (
        <Container id='contact' className='mt-3 pt-4 pb-4' fluid>
            <Container className='pt-5'>
                <h1 className='contact-title mb-5'>Register Your Interest</h1>
                <div className='contact-container'>
                    <form onSubmit={handleSubmit}>
                        <Row className='m-2'>
                            <div className='inner-contact-container'>
                                <Col className='d-flex flex-column form-space'>
                                    <input type='text' value={name} placeholder='Name' onChange={e => { setName(e.target.value) }} />

                                    <input type='email' value={email} placeholder='Email Address' onChange={e => { setEmail(e.target.value) }} />

                                    <textarea rows='5' cols='40' value={message} placeholder='Message...' onChange={e => { setMessage(e.target.value) }}>
                                    </textarea>
                                </Col>
                                <Col className='d-flex flex-column form-space'>
                                    <select onChange={e => { setOccupation(e.target.value) }}>
                                        <option disabled>Occupation</option>
                                        {job.map(item => {
                                            return (
                                                <option value={item.value} key={item.id}>{item.value}</option>
                                            )
                                        })};
                                    </select>
                                    <input type='number' value={number} placeholder='Contact No' onChange={e => { setNumber(e.target.value) }} />
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