import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setGifItem } from '../Redux/action';

function GifView({ gifItem, setGifItem }) {
   // const [gifId, setGifId] = useState([])
   const { name } = useParams()

   useEffect(() => {
      setGifItem(name)
   }, [setGifItem, name])

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

const mapState = state => {
   return {
      gifItem: state.gifItem
   }
}

const mapDispatch = dispatch => {
   return {
      setGifItem: (gifitem) => { dispatch(setGifItem(gifitem)) }
   }
}

export default connect(mapState, mapDispatch)(GifView)