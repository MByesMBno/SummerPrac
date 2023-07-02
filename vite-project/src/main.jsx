import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Logo from './logo.jsx'
import Vl from './Vl.jsx'
import Center from './Center.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import Fresh from './Fresh.jsx'
import Footer from './Components/Footer.jsx'
import Watch from './Watch.jsx'
import Overlay from './FilmInfo/Overlay.jsx'
import Autorize from './Autorize/Autorize.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Vl/>
      <Logo />
      <Header />
      <Routes>
        <Route  path='/Autorize' element={<Autorize/>} />  
        <Route  path='/Fresh' element={<Fresh/>} />
        <Route  path='/Center' element={<Center/>} />
        <Route  path='/' element={<Center/>} />
        <Route  path='/Videopl' element={<Watch/>} />
        <Route  path='/FilmName' element={<Overlay/>} />
      </Routes>
      <Footer/> 
    </BrowserRouter>
  </React.StrictMode>,
)
