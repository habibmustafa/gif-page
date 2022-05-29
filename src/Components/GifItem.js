import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setGifItem } from '../Redux/action'

function GifItem({ setGifItem, ...item }) {
   
   let navigate = useNavigate()
   const handleClick = () => {
      setGifItem({...item})
      navigate(`/view/${item.content_description}-${item.id}`)
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
      setGifItem: ({...item}) => {dispatch(setGifItem({...item}))}
   }
}

export default connect(undefined, mapDispatch)(GifItem)