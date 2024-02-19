import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
  return (
    <div className='nav'> 
    <h2>Online Judge</h2>
      <ul>
        <li>HOME</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>LeaderBoard</li>
        <li>Contest</li>
        {/* <li><NavLink to='/aboutus'>About us</NavLink></li> */}
        <li><NavLink to='/login'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar
