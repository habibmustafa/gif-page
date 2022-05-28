import React from 'react'

function GifItem({...item}) {
   return (
      <div className="gif">
         <img src={item.media[0].tinygif.url} alt={item.content_description} />
      </div>
   )
}

export default GifItem