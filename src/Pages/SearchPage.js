import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';
import GifItem from '../Components/GifItem';
import Masonry from 'react-masonry-css';
import SearchSuggestions from '../Components/SearchSuggestions';
import { setInputChange, setSuggestions, setSearch } from '../Redux/action';

const breakPoints = {
   default: 4,
   1170: 3,
   840: 2,
   600: 1
}

function SearchPage({ getSearch, getSuggestions, setSuggestions, setSearch }) {
   const { value } = useParams()

   useEffect(() => {
      setSearch(value)
      setSuggestions(value)
   },[setSearch, setSuggestions, value])

   return (
      <div className="main-page">
         <div className="container">
            <h2>{value}</h2>
            <div className='search-suggestions'>
               {getSuggestions ? getSuggestions.map(item => (
                  <SearchSuggestions key={item} item={item} />
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

const mapDispatch = dispatch => {
   return {
      setValue: (value) => { dispatch(setInputChange(value)) },
      setSearch: (name) => { dispatch(setSearch(name)) },
      setSuggestions: (name) => { dispatch(setSuggestions(name)) }
   }
}


export default connect(mapState, mapDispatch)(SearchPage)