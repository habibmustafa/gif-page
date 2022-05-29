import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux';
import { setSearch } from '../Redux/action'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

const getTrend = async () => {
   const response = await fetch(`https://g.tenor.com/v1/trending_terms?key=O2F76B8G7S1C&limit=30`)
   const data = response.json();
   return data;
}

function SampleNextArrow({onClick}) {
   return (
   //   <div
   //     className={`${className} next-arrow`}
   //     style={{ ...style}}
   //     onClick={onClick}
   //   />
     <div onClick={onClick} className='next-arrow'><GrFormNext size={30}/></div>
   );
 }
 
 function SamplePrevArrow({onClick}) {
   return (
      <div onClick={onClick} className='prev-arrow'><GrFormPrevious size={30}/></div>
   );
 } 

function TrendSearch({trendGif, setTrendGif}) {
   const [trend, setTrend] = useState([])

   useEffect(() => {
      getTrend().then((data) => setTrend(data.results));
      
   },[])

   // setTrendGif('it')
   // helelik
   // let a = trendGif.length ? trendGif[0].media[0].nanogif.url : null
   // console.log(a);
   // console.log(trendGif);

   var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            nextArrow: false,
            prevArrow: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: false,
            prevArrow: false
          }
        }
      ]
    };

   return (
      <div className='trend-search'>
         <h3>Trending Searches</h3>
         <div className='slider'>
            <Slider {...settings}>
               {trend.length ? trend.map((item, index) => {
                  return (
                     <div className="trend-item" key={item} >
                        <div className="trend-gif" style={{backgroundImage: `url(${"https://media.tenor.com/images/9dcc93bb7a1fabc08b60f7eb49d798d8/tenor.gif"})`}}></div>
                        <h6>{item}</h6>
                     </div>
                  )
               }) : null}
            </Slider>
         </div>
      </div>
   )
}
const mapState = state => {
   return { trendGif: state.search }
}

const mapDispatch = dispatch => {
   return {
      setTrendGif: (name) => { dispatch(setSearch(name)) }
   }
}

export default connect(mapState, mapDispatch)(TrendSearch)
// "https://media.tenor.com/images/9dcc93bb7a1fabc08b60f7eb49d798d8/tenor.gif"
// ${trendGif[0].media[0].nanogif.url}