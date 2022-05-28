import React, { useEffect, useState } from 'react'
import GifItem from '../Components/GifItem'

const getFeatured = async () => {
   const response = await fetch(`https://g.tenor.com/v1/trending?key=O2F76B8G7S1C&limit=50`)
   const data = response.json();
   return data;
}

function MainPage() {
   const [feature, setFeature] = useState([])

   useEffect(() => {
      getFeatured().then((data) => setFeature(data.results));
   }, [])
   
   console.log(feature);
   return (
      <div className="main-page">
         <div className="container">
            <h3>Featured GIFs</h3>
            <div className="gif-wrapper">
               {feature.length ? feature.map(item => (
                  <GifItem key={item.id} {...item} />
               )) : null}
            </div>
         </div>
      </div>
   )
}



export default MainPage