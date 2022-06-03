import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { Logo } from './ui/Logo'

function Navbar() {
   return (
      <nav>
         <div className="container">
            <Logo className="logo" />
            <ul className='navItems'>
               <li><Link to="/user"><FaUser size={25} /></Link></li>
               <li>Explore</li>
               <li><NavLink to="/about">About</NavLink></li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar