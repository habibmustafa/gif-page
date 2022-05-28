import React, { useEffect, useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { connect } from 'react-redux'
import { setSearch } from '../Redux/action'
import { useNavigate } from 'react-router-dom'


function Search({ setSearch }) {
   const [value, setValue] = useState('')

   let navigate = useNavigate()
   const handleClick = () => {
      navigate(`/search/${value}`)
      setSearch(value)
      setValue('') //sifirla
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
               {/* <Link to={`/search/${value}`}> */}
               <button onClick={handleClick}><GoSearch size={20} /></button>
               {/* </Link> */}
            </div>
         </div>
      </div>
   )
}

const mapDispatch = dispatch => {
   return {
      setSearch: (name) => { dispatch(setSearch(name)) }
   }
}

export default connect(undefined, mapDispatch)(Search)