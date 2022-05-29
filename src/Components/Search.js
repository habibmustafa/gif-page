import React, { useEffect, useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { connect } from 'react-redux'
import { setInputChange, setSearch, setSuggestions } from '../Redux/action'
import { useNavigate } from 'react-router-dom'

function Search({ setSearch, setSuggestions, value, setValue }) {

   let navigate = useNavigate()
   const handleClick = () => {
      navigate(`/search/${value}`)
      setSearch(value)
      setSuggestions(value)
   }

   const enterClick = (e) => {
      if (e.key === 'Enter') {
         handleClick()
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
               <input onChange={(e) => setValue(e.target.value)}
                  value={value}
                  type='search'
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
      setSearch: (name) => { dispatch(setSearch(name)) },
      setSuggestions: (name) => { dispatch(setSuggestions(name)) }
   }
}

export default connect(mapState, mapDispatch)(Search)