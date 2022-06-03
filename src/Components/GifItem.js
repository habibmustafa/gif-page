import React from 'react'
import './GifItem.css'
import { useNavigate } from 'react-router-dom'

function GifItem({ ...item }) {
   
   let navigate = useNavigate()
   const handleClick = () => {
      navigate(`/view/${item.id}`)
   }

   return (
      <div
         onClick={handleClick}
         className="gif" style={{ height: `${item.media[0].tinygif.dims[1]}px`}}
      >
         <img src={item.media[0].tinygif.url} alt={item.content_description} />
      </div>
   )
}

export default GifItem