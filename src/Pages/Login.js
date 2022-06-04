import React, { useState } from 'react'
import './Login.css'
import {AiOutlineClose} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { setLoginModal } from '../Redux/action'

const Login = () => {
   const [signupShow, setSignupShow] = useState(false)

   const dispatch = useDispatch()

   const handleClick = () => {
      setSignupShow(!signupShow)
   }
   return (
      <div className='login-page'>
         <div className="container">
            <div className={`user ${signupShow && 'sign-up-box'}`}>
               <AiOutlineClose onClick={() => dispatch(setLoginModal(false))} className='close'/>
               <div className="img-box">
                  <img src="https://bestanimations.com/media/keys/28804563key-animated-gif-3.gif" alt="" />
               </div>
               <div className="form-box">
                  <form>
                     <h2>Sign {signupShow ? 'Up' : 'In'}</h2>

                     <input type="text" placeholder='Username' required />
                     {signupShow && (
                        <>
                           <input type="text" placeholder='Email Address' required />
                           <input type="password" placeholder='Create Password' required />
                        </>
                     )}
                     <input type="password" placeholder={`${signupShow ? 'Create Password' : 'Password'}`} required />
                     <button type='submit'>{signupShow ? 'Sign Up' : 'Sign In'}</button>
                     <p className="signup">
                        {signupShow ? 'Already have an account?' : "don't have an account?"}
                        <span onClick={handleClick}>{signupShow ? 'Sign In' : 'Sign Up'}</span>
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login