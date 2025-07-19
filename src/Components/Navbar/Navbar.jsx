import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      (window.scrollY > 50)? setIsDark(true) : setIsDark(false);
    });
  }, []); 

  return (
    <nav className={`nav-container ${isDark ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className='logo' />
      <ul>
        <li>Home</li>
        <li>Programs</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Services</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
