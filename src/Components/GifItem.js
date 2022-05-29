import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setGifItem } from '../Redux/action'

function GifItem({ setGifItem, ...item }) {
   
   let navigate = useNavigate()
   const handleClick = () => {
      setGifItem(item.id)
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



const mapDispatch = dispatch => {
   return {
      setGifItem: (id) => {dispatch(setGifItem(id))}
   }
}

export default connect(undefined, mapDispatch)(GifItem)