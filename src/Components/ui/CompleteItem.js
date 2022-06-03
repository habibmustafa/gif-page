import React from 'react'
import './CompleteItem.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearch, setInputChange } from '../../Redux/action'


const CompleteItem = ({ item }) => {

   const dispatch = useDispatch()
   let navigate = useNavigate()

   const handleClick = () => {
      dispatch(setSearch(item))

      navigate(`../search/${item}`)
      dispatch(setInputChange(item))
   }

   return (
      <li onClick={handleClick} className='complete-item'>{item}</li>
   )
}

export default CompleteItem