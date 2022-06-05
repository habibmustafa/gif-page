import React, { useEffect, useState, useRef } from 'react'
import './GifView.css'
import Loading from '../Components/ui/Loading'
import NotFoundPage from './NotFoundPage'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Heart from '../Components/Heart'
import SearchSuggestions from '../Components/SearchSuggestions'
import { setSuggestions } from '../Redux/action';

// icons
import {BsFacebook, BsTwitter, BsInstagram, BsPinterest} from 'react-icons/bs'
import {TbCopy} from 'react-icons/tb'
import {BsThreeDots} from 'react-icons/bs'
import Related from '../Components/Related'


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

   const getSuggestions = useSelector(state => state.searchSuggestions)
   const dispatch = useDispatch()

   const heartRef = useRef()

   const statusFunc = () => {
      setStatus(true)
   }
   useEffect(() => {
      setTimeout(statusFunc, 600);

      getData(name).then(data => {
         if (data.results) {
            setGifItem(data.results)
            // data.results.length && suggestion = gifItem[0].content_description.split(' ')[0]
            dispatch(setSuggestions(data.results[0].content_description.split(' ')[0]))
         }
         else {
            setGifItem(data.code)
         }
      })
      return () => {
         clearTimeout(statusFunc)
      }
   }, [name, dispatch])


   if (gifItem === 3) {
      return (status && <NotFoundPage error='400' />)
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

                        <div className="gif-actions">
                           <div className="change-media">
                              <button className='active'> ● SD GIF</button>
                              <button> ● HD GIF</button>
                              <button> ● MP4</button>
                           </div>
                           {/* like gif */}
                           <Heart item={gifItem[0]} ref={heartRef} />
                        </div>
                        <div className="share-social-media">
                           <span title='Facebook'><BsFacebook className='icon'/></span>
                           <span title='Twitter'><BsTwitter className='icon' /></span>
                           <span title='Instagram'><BsInstagram className='icon' /></span>
                           <span title='Pinterest'><BsPinterest className='icon' /></span>
                           <span title='Copy Link?'><TbCopy className='icon' /></span>
                           <span title='Addition...'><BsThreeDots className='icon' /></span>
                        </div>
                        <div className="suggestions">
                           <div className='search-suggestions'>
                              {getSuggestions ? getSuggestions.map((item, index) => (
                                 <SearchSuggestions key={index} item={item} />
                              )) : null}
                           </div>
                        </div>
                        <div className="share-url">
                           <h5>Share URL</h5>
                           <div className="url">
                              {gifItem[0].itemurl}
                           </div>
                        </div>
                        <div className="gif-details">
                           <h5>Details</h5>
                           <p>File Size:</p>
                           <p>Duration:</p>
                           <p>Dimensions:</p>
                        </div>
                     </div>

                     {/* right section */}
                     <div className="right">
                        {/* Releated GIFs */}
                        <h3>Related GIFs</h3>
                        <Related name={gifItem[0].content_description.split(' ').slice(0,2).join(' ')} />
                     </div>

                  </div>
               </div>
            </div>
      ) : <Loading />
   )
}

export default GifView

// id ile axtarisda yalniz reqemler olanda xeta vermir, bos massiv verir. ama icinde herf varsa xetani verir. Ona gore ikili yoxlama oldu