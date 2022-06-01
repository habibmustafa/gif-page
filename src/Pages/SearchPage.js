import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import GifItem from '../Components/GifItem';
import Masonry from 'react-masonry-css';
import SearchSuggestions from '../Components/SearchSuggestions';
import { setSuggestions, setSearch } from '../Redux/action';

const breakPoints = {
   default: 4,
   1170: 3,
   840: 2,
   600: 1
}

function SearchPage() {
   const getSearch = useSelector(state => state.search)
   const getSuggestions = useSelector(state => state.searchSuggestions)
   const dispatch = useDispatch()
   const { value } = useParams()

   useEffect(() => {
      dispatch(setSearch(value))
      dispatch(setSuggestions(value))
   },[dispatch, value])

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

export default SearchPage