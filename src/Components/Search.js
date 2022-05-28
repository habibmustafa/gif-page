import React, { useState } from 'react'
import {GoSearch} from 'react-icons/go'
import { connect } from 'react-redux'
import { setSearch } from '../Redux/action'
import { Link } from 'react-router-dom'

function Search({setSearch}) {
   const [value, setValue] = useState('')
   return (
      <div className='search'>
         <div className="container">
            <div className='input-search'>
               <input onChange={(e) => setValue(e.target.value)} 
                  value={value} 
                  type='search' 
                  placeholder='Search for GIFs and Sickers'
               />
               <Link to='/search/1'><button onClick={() => setSearch(value)}><GoSearch size={20} /></button></Link>
            </div>
         </div>
      </div>
   )
}

const mapDispatch = dispatch => {
   return {
      setSearch: (name) => {dispatch(setSearch(name))}
   }
}

export default connect(undefined, mapDispatch)(Search)