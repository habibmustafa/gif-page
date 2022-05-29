import React, { useEffect } from 'react'
import { GoSearch } from 'react-icons/go'
import { connect } from 'react-redux'
import { setInputChange, setSuggestions } from '../Redux/action'
import { useNavigate } from 'react-router-dom'

function Search({ setSuggestions, value, setValue }) {

   let navigate = useNavigate()
   const handleChange = e => {
      setValue(e.target.value)
   }

   const handleClick = () => {
      if( !value  ) return false
      value && navigate(`/search/${value}`)
      setSuggestions(value)
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

      if (e.key === '/' || e.key ==='\\') {
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

   useEffect(() => {
      window.addEventListener('keypress', enterClick)
      return () => {
         window.removeEventListener('keypress', enterClick)
      }
   })

   return (
      <div className='search'>
         <div className="container">
            <div className='input-search'>
               <input onChange={(e) => handleChange(e)}
                  value={value}
                  type='text'
                  placeholder='Search for GIFs and Sickers'
               />
               <button onClick={handleClick}><GoSearch size={20} /></button>
            </div>
         </div>
      </div>
   )
}

const mapState = state => {
   return {
      value: state.inputValue
   }
}

const mapDispatch = dispatch => {
   return {
      setValue: (value) => { dispatch(setInputChange(value)) },
      setSuggestions: (name) => { dispatch(setSuggestions(name)) }
   }
}

export default connect(mapState, mapDispatch)(Search)