import React from 'react'
import './Favorites.css'
import Masonry from 'react-masonry-css'
import GifItem from './GifItem'

const Favorites = () => {

   let favorites = JSON.parse(localStorage.favoriteItem)

   const breakPoints = {
      default: 4,
      1170: 3,
      840: 2,
      600: 1
   }

   return (
      <div className="favorites">
         <h2>Favorites</h2>
         {favorites.length ? <Masonry
               breakpointCols={breakPoints}
               className="my-masonry-grid"
               columnClassName="my-masonry-grid_column"
            >
               {favorites.map(item => (
                  <GifItem key={item.id} {...item} />
               )) }
            </Masonry> : <h2>favorite yoxdu</h2> } {/* sonra duzelt */} 
      </div>
   )
}

export default Favorites