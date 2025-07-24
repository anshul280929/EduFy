import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
const Navbar = () => {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      (window.scrollY > 500)? setIsDark(true) : setIsDark(false);
    });
  }, []); 

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`nav-container ${isDark ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duraion={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duraion={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duraion={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duraion={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duraion={500}>Testimonials</Link></li>
        <li><button className='btn'><Link to='contact' smooth={true} offset={-260} duraion={500}>Contact</Link></button></li>
      </ul>
      <img src={menu} alt="logo" className='menu-icon' onClick={toggleMenu}/> 
    </nav>
  )
}

export default Navbar
