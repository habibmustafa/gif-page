import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import User from './Pages/User'
import GifView from './Pages/GifView'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import "./Style/style.css"
import Search from './Components/Search'
import SearchPage from './Pages/SearchPage'


function App() {
   return (
      <div className='app'>
         <Navbar />
         <Search />
         <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/search/:inputValue' element={<SearchPage />} />
            <Route path='/user' element={<User />} />
            <Route path='/view/:name' element={<GifView />} />
            <Route path='/About' element={<About />} />
            {/* <Route path='/' element={<Contact />} /> */}
         </Routes>
      </div>
   )
}

export default App