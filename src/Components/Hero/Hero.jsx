import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <h1>Welcome to the Future of Education</h1>
            <p>Empowering students to achieve academic excellence 
                and personal growth, our university fosters innovation, 
                inclusivity, and lifelong learning. Join us to shape your 
                future and make a positive impact on the world.
            </p>
            <button className='btn'>Explore Now <img src={arrow} alt="arrow" /></button>
        </div>
      
    </div>
  )
}

export default Hero
