import FeaturedGifs from '../Components/FeaturedGifs'
import TrendSearch from '../Components/TrendSearch'

function MainPage() {
   return (
      <div className="main-page">
         <div className="container">
            <TrendSearch />
            <FeaturedGifs />
         </div>
      </div>
   )
}

export default MainPage