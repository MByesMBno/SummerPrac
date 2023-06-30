import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Logo from './logo.jsx'
import Vl from './Vl.jsx'
import Center from './Center.jsx'
import Vl2 from './Vl2.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import Fresh from './Fresh.jsx'
import Footer from './Components/Footer.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Vl/>
      <Logo />
      <Header />
      <Routes>
        <Route  path='/Fresh' element={<Fresh/>} />
        <Route  path='/Center' element={<Center/>} />
        <Route  path='/' element={<Center/>} />
      </Routes>
      <Footer/>     
    </BrowserRouter>
  </React.StrictMode>,
)
