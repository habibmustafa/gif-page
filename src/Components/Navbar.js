import React from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { Logo } from './ui/Logo'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginModal } from '../Redux/action'

function Navbar() {

   let username
   !localStorage.username ? username = null : username = JSON.parse(localStorage.username)

   const navigate = useNavigate()
   const loginStatus = useSelector(state => state.loginStatus)
   const dispatch = useDispatch()

   const handleClick = () => {
      dispatch(setLoginModal(true))
   }

   return (
      <nav>
         <div className="container">
            <Logo className="logo" />
            <ul className='navItems'>
               {loginStatus && username ?
                  <li>
                     <CgProfile onClick={() => navigate(`/user/${username}`)} size={28} />
                  </li> :
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