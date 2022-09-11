import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './aboutComp.css'

const AboutComp = () => {
  return (
    <div>
      <div style={{ position: 'relative', color: 'white' }}>
        <h3 style={{ fontWeight: '800', zIndex: '1', position: 'relative' }}>Full Stack Developer with a serious passion for creating and learning.</h3>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <h1 className='about-me-bg'>ABOUT ME</h1>
        </AnimationOnScroll>
      </div>
    </div>
  )
}

export default AboutComp