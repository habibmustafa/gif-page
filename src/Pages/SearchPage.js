import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';
import GifItem from '../Components/GifItem';
import Masonry from 'react-masonry-css';
import SearchSuggestions from '../Components/SearchSuggestions';

const breakPoints = {
   default: 4,
   1170: 3,
   910: 2
}

function SearchPage({ getSearch, getSuggestions }) {
   const { value } = useParams()

   console.log(getSuggestions);
   return (
      <div className="main-page">
         <div className="container">
            <h2>{value}</h2>
            {/* component */}
            <div className='search-suggestions'>
               {getSuggestions ? getSuggestions.map(item => (
                  <SearchSuggestions key={item} item = {item} />
               )) : null}
            </div>
            <h3>GIFs</h3>
            <div className="gif-wrapper">
               <Masonry
                  breakpointCols={breakPoints}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
               >
                  {getSearch ? getSearch.map(item => (
                     <GifItem key={item.id} {...item} />
                  )) : null}
               </Masonry>
            </div>
         </div>
      </div>
   )
}

const mapState = (state) => {
   return {
      getSearch: state.search,
      getSuggestions: state.searchSuggestions
   }
}


export default connect(mapState)(SearchPage)