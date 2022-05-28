import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

function Navbar() {
   return (
      <nav>
         <div className="container">
            <div className="logo"><Link to="/">Gifs</Link></div>
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