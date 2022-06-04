import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import User from './Pages/User'
import GifView from './Pages/GifView'
import About from './Pages/About'
import SearchPage from './Pages/SearchPage'
import Navbar from './Components/Navbar'
import Contact from './Pages/Contact'
import NotFoundPage from './Pages/NotFoundPage'
import "./Style/style.css"
import Search from './Components/Search'


function App() {
   return (
      <div className='app'>
         <Navbar />
         <Routes>
            <Route path='/' element={<><Search /><MainPage /></>} />
            <Route path='/search/:value' element={<><Search /><SearchPage /></>} />
            <Route path='/user' element={<User />} />
            <Route path='/view/:name' element={<><Search /><GifView /></>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='*' element={<><Search /><NotFoundPage error='404' /></>} />
         </Routes>
      </div>
   )
}

export default App