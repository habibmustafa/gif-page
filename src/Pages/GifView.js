import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

function GifView({ gifItem }) {
   const { name } = useParams()
   console.log(name);
   return (
      <div className='gif-item'>
         <div className="container">
            <h3>{gifItem.content_description}</h3>

            <div className="gif-item-wrapper">

               {/* left section */}
               <div className="left">
                  <div className="big-gif" style={{ height: `${gifItem.media[0].mediumgif.dims[1]}px`}}>
                     <img src={gifItem.media[0].mediumgif.url} alt="" />
                  </div>
                  <div className="share-url">{gifItem.itemurl}</div>
                  {/* basqa seyler */}
               </div>

               {/* right section */}
               <div className="right">
                  {/* Releated GIFs */}
               </div>

            </div>
         </div>
      </div>
   )
}

const mapState = state => {
   return {
      gifItem: state.gifItem
   }
}

export default connect(mapState)(GifView)