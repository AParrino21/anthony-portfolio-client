import React, { useState } from 'react';
import './home.css';
import AboutComp from '../../components/AboutComp/AboutComp';
import ProjectComp from '../../components/ProjectComp/ProjectComp';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Home = () => {

    const [copiedEmail, setCopiedEmail ] = useState('Click To Copy!')
    const [copyColor, setCopyColor ] = useState('black')

    function copyEmail() {
        navigator.clipboard.writeText('anthonyparrino90@gmail.com');
        setCopiedEmail('COPIED!')
        setCopyColor('green')
    }

    return (
        <div>
            <div className='header-container'>
                <div className='myheader'>
                    <h1 className='tracking-in-expand-fwd-top'>Anthony Parrino</h1>
                    <br />
                    <p className='focus-in-contract'>&lt;Full Stack Software Engineer&gt;</p>
                    <br />
                    <div className='skills-container'>
                        <p className="text-focus-in">REACT</p>
                        <p style={{ animation: 'text-focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both' }} className="text-focus-in">JAVASCRIPT</p>
                        <p style={{ animation: 'text-focus-in 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both' }} className="text-focus-in">NODE</p>
                        <p style={{ animation: 'text-focus-in 2.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both' }} className="text-focus-in">MONGODB</p>
                    </div>
                    <br />
                    <div className='icons-container'>
                        <GitHubIcon className='icons icons-git' onClick={() => window.location.href = 'https://github.com/AParrino21'} />
                        <LinkedInIcon className='icons icons-link' onClick={() => window.location.href = 'https://www.linkedin.com/in/anthony-parrino-887b391b3/'} />
                        <SchoolIcon className='icons icons-school' onClick={() => window.location.href = 'https://github.com/goobisanubis21'} />
                    </div>
                    <br />
                    <div>
                        <p className='copy-email' onClick={copyEmail}>ANTHONYPARRINO90@GMAIL.COM <ContentCopyIcon style={{fontSize: '15px'}}/></p>
                        <p style={{color: copyColor}} id='copy-text'>{copiedEmail}</p>
                    </div>
                </div>
                <div className='scrollable about-home-container'>
                    <AboutComp />
                </div>
                <div className='scrollable-project project-home-container'>
                    <ProjectComp />
                </div>
            </div>
        </div>
    )
}

export default Home