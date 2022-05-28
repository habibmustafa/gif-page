import React from 'react'
import { connect } from 'react-redux'
import GifItem from '../Components/GifItem';

function SearchPage({getSearch}) {
   return (
      <div className="main-page">
         <div className="container">
            <h3>GIFs</h3>
            <div className="gif-wrapper">
               {getSearch ? getSearch.map(item => (
                  <GifItem key={item.id} {...item} />
               )) : null}
            </div>
         </div>
      </div>
   )
}

const mapState = (state) => {
   return {
      getSearch: state.search
   }
}

export default connect(mapState)(SearchPage)