import React, { useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { Logo } from './ui/Logo'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginModal } from '../Redux/action'

function Navbar() {
   const [loginStatus, setLoginStatus] = useState(false)

   const loginModal = useSelector(state => state.loginModal)
   const dispatch = useDispatch()

   const handleClick = () => {
      setLoginStatus(true)
      dispatch(setLoginModal(true))
   }

   return (
      <nav>
         <div className="container">
            <Logo className="logo" />
            <ul className='navItems'>
               {loginStatus ?
                  !loginModal && <li><Link to="/user"><FaUser size={25} /></Link></li> :
                  <button onClick={handleClick} type='button'>Sign In</button>}
               <li>Explore</li>
               <li><NavLink to="/contact-us">Contact Us</NavLink></li>
               <li><NavLink to="/about">About</NavLink></li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar