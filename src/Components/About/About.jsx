import React from 'react';
import './About.css';
import aboutImage from '../../assets/about.png'; // Assuming you have an image for the about section
import playIcon from '../../assets/play-icon.png'; // Assuming you have a play icon for the video
const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className='about-left'>
        <img src={aboutImage} alt="" className='about-img'></img>
        <img src={playIcon} alt="" className='play-icon' onClick={()=>
          {setPlayState(true)}
          }></img>
      </div>
      <div className='about-right'>
        <h3>About University</h3>
        <h2>
            EduFy University: Shaping Futures Through Education
        </h2>
        <p>
            Welcome to EduFy, a vibrant academic community dedicated to excellence in education, 
            innovation, and leadership. Founded on the principles of knowledge, integrity, and service, our university 
            has grown into a hub of learning that empowers students to explore their potential and shape the future.
        </p>
        <p>
            At EduFy, we offer a diverse range of programs designed to meet the needs of our students and the demands of 
            a rapidly changing world. Our faculty comprises distinguished scholars and industry experts who are committed 
            to providing a transformative educational experience.
        </p>
        <p>
            Our state-of-the-art facilities, coupled with a supportive and inclusive environment, foster creativity and 
            collaboration. We encourage our students to engage in research, community service, and extracurricular activities 
            that enhance their academic journey and personal growth.
        </p>
      </div>
    </div>
  );
}
export default About;