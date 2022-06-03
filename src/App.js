import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import User from './Pages/User'
import GifView from './Pages/GifView'
import About from './Pages/About'
import SearchPage from './Pages/SearchPage'
import Navbar from './Components/Navbar'
import NotFoundPage from './Pages/NotFoundPage'
import "./Style/style.css"
import Search from './Components/Search'


function App() {
   return (
      <div className='app'>
         <Navbar />
         <Search />
         <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/search/:value' element={<SearchPage />} />
            <Route path='/user' element={<User />} />
            <Route path='/view/:name' element={<GifView />} />
            <Route path='/About' element={<About />} />
            <Route path='*' element={<NotFoundPage error='404' />} />
            {/* <Route path='/' element={<Contact />} /> */}
         </Routes>
      </div>
   )
}

export default App