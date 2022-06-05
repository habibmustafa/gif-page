import React, { useRef, useState } from 'react'
import './GifItem.css'
import { useNavigate } from 'react-router-dom'

function GifItem({ ...item }) {
   const [hover, setHover] = useState(false)
   const [heartActive, setHeartActive] = useState(false)

   const heartRef = useRef()

   let navigate = useNavigate()
   const handleClick = (e) => {
      heartRef.current.contains(e.target) || navigate(`/view/${item.id}`)
   }

   return (
      <div
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         onClick={(e) => handleClick(e)}

         className="gif" style={{ height: `${item.media[0].tinygif.dims[1]}px` }}
      >
         {hover &&
            <div
               ref={heartRef}
               onClick={() => setHeartActive(!heartActive)}
               className="heart-box"
            >
               <span tabIndex={30} className={`heart ${heartActive && 'heart-active'}`}></span>
            </div>}
         <img className='item-img' src={item.media[0].tinygif.url} alt={item.content_description} />
      </div>
   )
}

export default GifItem