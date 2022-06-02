import React, { useEffect, useState } from 'react'
import GifItem from './GifItem'
import Masonry from 'react-masonry-css'

const getFeatured = async () => {
   const response = await fetch(`https://g.tenor.com/v1/trending?key=O2F76B8G7S1C&limit=50`)
   const data = response.json();
   return data;
}

function FeaturedGifs() {
   const [feature, setFeature] = useState([])

   useEffect(() => {
      getFeatured().then(data => setFeature(data.results));
   }, [])

   const breakPoints = {
      default: 4,
      1170: 3,
      840: 2,
      600: 1
   }
   console.log(feature);

   return (
      <div className='feature-gifs'>
         <h3>Featured GIFs</h3>
         <div className="gif-wrapper">
            <Masonry
               breakpointCols={breakPoints}
               className="my-masonry-grid"
               columnClassName="my-masonry-grid_column"
            >
               {feature.length ? feature.map(item => (
                  <GifItem key={item.id} {...item} />
               )) : null}
            </Masonry>
         </div>
      </div>
   )
}

export default FeaturedGifs