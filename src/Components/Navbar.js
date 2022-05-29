import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { connect } from 'react-redux'
import { setInputChange } from '../Redux/action'

function Navbar({ setValue }) {
   return (
      <nav>
         <div className="container">
            <div onClick={() => setValue('') } className="logo"><Link to="/">Gifs</Link></div>
            <ul className='navItems'>
               <li><Link to="/user"><FaUser size={25} /></Link></li>
               <li>Explore</li>
               <li><NavLink to="/about">About</NavLink></li>
            </ul>
         </div>
      </nav>
   )
}

const mapDispatch = dispatch => {
   return {
      setValue: ((value) => { dispatch(setInputChange(value)) })
   }
}

export default connect(undefined, mapDispatch)(Navbar)