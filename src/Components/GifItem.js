import React, { useRef, useState } from 'react'
import './GifItem.css'
import { useNavigate } from 'react-router-dom'

function GifItem({ ...item }) {
   const [hover, setHover] = useState(false)

   const heartRef = useRef()

   let navigate = useNavigate()
   const handleClick = (e) => {
      heartRef.current.contains(e.target) || navigate(`/view/${item.id}`)

   }

   let favoriteItemArray = [];
   !localStorage.favoriteItem && localStorage.setItem('favoriteItem', JSON.stringify(favoriteItemArray))

   favoriteItemArray = JSON.parse(localStorage.favoriteItem)

   let check = (favoriteItemArray.find(a=> a.id == item.id) === undefined ? false : favoriteItemArray.find(a=> a.id === item.id).id === item.id)

   const [heartActive, setHeartActive] = useState(check)


   const heartClick = () => {
      if (!Boolean(favoriteItemArray.find(a=> a.id === item.id))) {
         favoriteItemArray.push({...item, status: !heartActive})
         localStorage.setItem('favoriteItem', JSON.stringify(favoriteItemArray))
         setHeartActive(true)
      }
      else {
         const index = favoriteItemArray.findIndex(a => a.id === item.id)
         favoriteItemArray.splice(index, 1)
         localStorage.setItem('favoriteItem', JSON.stringify(favoriteItemArray))
         setHeartActive(false)
      }
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
               onClick={heartClick}
               className="heart-box"
            >
               <span
                  tabIndex={30}
                  className={`${heartActive ? 'heart heart-active' : 'heart'}`}>

               </span>
            </div>}
         <img className='item-img' src={item.media[0].tinygif.url} alt={item.content_description} />
      </div>
   )
}

export default GifItem