import React from 'react';
import { Button, Image, Jumbotron } from 'react-bootstrap';
import Jumbo from '../assets/jumbo-bg.svg';


const TopJumbo = () => {

    return (
        <Jumbotron fluid className='jumbo'>
            <Image src={Jumbo} fluid />
            <div className='jb0-container'>
                <p className='jb-text1'>what are you waiting for?</p>
                <h1 className='jb-h1'>Let's be creative !</h1>
                <div className='jb1-container'>
                    <p>loremNulla incididunt aute</p>
                </div>
                <br />
                <div className='jb2-container'>
                    <div className='line-grp1'>
                        <hr className='line' />
                        <hr className='line' />
                    </div>
                    <div className="shape-grp1">
                        <div className='shape1'></div>
                        <div className='shape2'></div>
                        <div className='shape3'></div>
                    </div>
                    <p className='jb-text2'><span>start</span> doing that</p>
                    <div className="shape-grp2">
                        <div className='shape1'></div>
                        <div className='shape2'></div>
                        <div className='shape3'></div>
                    </div>
                    <div className='line-grp2'>
                        <hr className='line' />
                        <hr className='line' />
                    </div>
                </div>
                <div className='top-btn'>
                    <Button variant='default' className='btn-down'><i className='arrow down'></i></Button>
                </div>
            </div>
        </Jumbotron>
    )
};

export default TopJumbo;