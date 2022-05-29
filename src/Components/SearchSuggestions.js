import React from 'react'
import { connect } from 'react-redux'
import { setSearch, setInputChange } from '../Redux/action'
import { useNavigate } from 'react-router-dom'

function SearchSuggestions({ item, setSearch, value, setValue }) {

   let navigate = useNavigate()
   const handleClick = (e) => {
      navigate(`../search/${item}`)
      setSearch(item)
      setValue(item)
   }
   return (
      <button onClick={handleClick} className='suggestions-button'>
         {item}
      </button>
   )
}

const mapState = state => {
   return {
      value: state.inputValue
   }
}

const mapDispatch = dispatch => {
   return {
      setSearch: (name) => { dispatch(setSearch(name)) },
      setValue: (value) => { dispatch(setInputChange(value)) }
   }
}

export default connect(mapState, mapDispatch)(SearchSuggestions)