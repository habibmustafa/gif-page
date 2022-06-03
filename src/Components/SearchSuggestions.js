import React from 'react'
import './SearchSuggestions.css'
import { useDispatch } from 'react-redux'
import { setSearch, setInputChange } from '../Redux/action'
import { useNavigate } from 'react-router-dom'

function SearchSuggestions({ item }) {

   const dispatch = useDispatch()
   let navigate = useNavigate()
   const handleClick = () => {
      // dispatch(setSuggestions('')) // helelik qalsin
      navigate(`../search/${item}`)
      dispatch(setSearch(item))
      dispatch(setInputChange(item))
      
   }
   return (
      <button onClick={handleClick} className='suggestions-button'>
         {item}
      </button>
   )
}

export default SearchSuggestions