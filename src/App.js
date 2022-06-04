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
import Login from './Pages/Login'
import { useSelector } from 'react-redux'


function App() {
   const loginModal = useSelector(state => state.loginModal)
   return (
      <div className='app'>
         {loginModal && <Login />}
         <Navbar />
         <Routes>
            <Route path='/' element={<><Search /><MainPage /></>} />
            <Route path='/search/:value' element={<><Search /><SearchPage /></>} />
            <Route path='/user/:name' element={<><Search /><User /></>} />
            <Route path='/view/:name' element={<><Search /><GifView /></>} />
            <Route path='/sign-in' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='*' element={<NotFoundPage error='404' />} />
         </Routes>
      </div>
   )
}

export default App