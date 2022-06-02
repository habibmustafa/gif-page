import React, { useEffect, useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { setInputChange, setSearch, setSuggestions } from '../Redux/action'
import { useNavigate } from 'react-router-dom'
import { Logo } from './ui/Logo'

function Search() {
   const [navStyle, setNavStyle] = useState(false)
   // react-redux
   const value = useSelector(state => state.inputValue)
   const dispatch = useDispatch()
   // react-router-dom
   let navigate = useNavigate()

   const handleChange = e => {
      dispatch(setInputChange(e.target.value))
   }

   const handleClick = () => {
      if (!value) return false
      value && navigate(`/search/${value}`)
      dispatch(setSuggestions(value))
      dispatch(setSearch(value))
   }

   const enterClick = (e) => {
      if (e.key === 'Enter') {
         handleClick()
      }
      if (e.target.value === '') {
         if (e.key === ' ' || e.key === '.') {
            e.preventDefault()
            return false
         }
      }

      if (e.key === '/' || e.key === '\\') {
         // get old value
         const start = e.target.selectionStart;
         const end = e.target.selectionEnd;
         const oldValue = e.target.value;
         // replace point and change input value
         const newValue = oldValue.slice(0, start) + '%2f' + oldValue.slice(end)
         e.target.value = newValue;

         // replace cursor
         e.target.selectionStart = e.target.selectionEnd = start + 3;
         e.preventDefault();
      }
   }

   const navbarStyle = () => {
      if (window.scrollY >= 50) {
         setNavStyle(true)
      }
      else {
         setNavStyle(false)
      }
   }

   useEffect(() => {
      window.addEventListener('keypress', enterClick)
      window.addEventListener('scroll', navbarStyle)
      return () => {
         window.removeEventListener('keypress', enterClick)
         window.removeEventListener('scroll', navbarStyle)
      }
   })

   return (
      <div className='search'> 
         <div className="container">
            <div className='input-search-container'>
               <Logo className={navStyle ? 'logo' : 'logo hidden'} />
               <div className={!navStyle ? 'input-search' : 'input-search active'}> {/* sonra bax */}
                  <input onChange={(e) => handleChange(e)}
                     value={value}
                     type='text'
                     placeholder='Search for GIFs and Sickers'
                  />
                  <button onClick={handleClick}><GoSearch size={20} /></button>
               </div>
            </div>
         </div>
      </div>
   )
}


export default Search