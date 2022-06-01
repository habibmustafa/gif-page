import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// daxili state
const getData = async (name) => {
   const response = fetch(`https://g.tenor.com/v1/gifs?ids=${name}&key=O2F76B8G7S1C`)
   const data = (await response).json()
   return data
}

function GifView() {
   const [gifItem, setGifItem] = useState([])
   const { name } = useParams()
   
   useEffect(() => {
      getData(name).then(data => setGifItem(data.results))
   }, [name])

   return (
      gifItem.length ? (
         <div className='gif-item'>
            <div className="container">
               <h3>{gifItem[0].content_description}</h3>

               <div className="gif-item-wrapper">
                  {/* left section */}
                  <div className="left">
                     <div className="big-gif" style={{ height: `${gifItem[0].media[0].mediumgif.dims[1]}px` }}>
                        <img src={gifItem[0].media[0].mediumgif.url} alt="" />
                     </div>
                     <div className="share-url">{gifItem[0].itemurl}</div>
                     {/* basqa seyler */}
                  </div>

                  {/* right section */}
                  <div className="right">
                     {/* Releated GIFs */}
                  </div>

               </div>
            </div>
         </div>
      ) : null //loading...(yaz)
   )
}

export default GifView