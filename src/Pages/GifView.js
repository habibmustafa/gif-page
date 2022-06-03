import React, { useEffect, useState } from 'react'
import './GifView.css'
import Loading from '../Components/ui/Loading'
import NotFoundPage from './NotFoundPage'
import { useParams } from 'react-router-dom'

// daxili state
const getData = async (name) => {
   const response = fetch(`https://g.tenor.com/v1/gifs?ids=${name}&key=O2F76B8G7S1C`)
   const data = (await response).json()
   return data
}

function GifView() {
   const [gifItem, setGifItem] = useState('')
   const [status, setStatus] = useState(false)
   const { name } = useParams()
   
   const statusFunc = () => {
      setStatus(true)
   }
   useEffect(() => {
      setTimeout(statusFunc, 300);
      getData(name).then(data => {
         if(data.results) {
            setGifItem(data.results)
         }
         else {
            setGifItem(data.code)
         }
      })
      return () => {
         clearTimeout(statusFunc)
      }
   }, [name])

   console.log(gifItem);
   if(gifItem === 3) {
      return ( status && <NotFoundPage error='400' /> )
   }
   return (
      status ? (
         !gifItem.length ? <NotFoundPage error='400' /> :
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
      ) : <Loading /> 
   )
}

export default GifView

// id ile axtarisda yalniz reqemler olanda xeta vermir, bos massiv verir. ama icinde herf varsa xetani verir. Ona gore ikili yoxlama oldu