import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div>
            <div className='header-container'>
                <h1 className='tracking-in-expand-fwd-top'>Anthony Parrino</h1>
                <br />
                <p className='focus-in-contract'>Full Stack Software Engineer</p>
                <br />
                <div className='skills-container'>
                    <p className="text-focus-in">REACT JS</p>
                    <p style={{ animation: 'text-focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both' }} className="text-focus-in">JAVASCRIPT</p>
                    <p style={{ animation: 'text-focus-in 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both' }} className="text-focus-in">NODE</p>
                    <p style={{ animation: 'text-focus-in 2.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both' }} className="text-focus-in">MONGODB</p>
                </div>
            </div>
        </div>
    )
}

export default Home