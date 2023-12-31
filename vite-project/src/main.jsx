import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Logo from './logo.jsx'
import Vl from './Vl.jsx'
import Center from './Center.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import Fresh from './Components/Fresh.jsx'
import Footer from './Components/Footer.jsx'
import Comedy from './Components/Comedy.jsx'
import Watch from './Watch.jsx'
import Overlay from './FilmInfo/Overlay.jsx'
import Autorize from './Autorize/Autorize.jsx'
import Trend from './Components/Trend.jsx'
import Logout from './Autorize/Logout.jsx'
import Cartoons from './Components/Cartoons.jsx'
import Fantasy from './Components/Fantasy.jsx'



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
        <Route  path='/Trending Now' element={<Trend/>}/>
        <Route  path='/Comedy' element={<Comedy/>}/>
        <Route  path='/Cartoons' element={<Cartoons/>}/>
        <Route  path='/Fantasy' element={<Fantasy/>}/>
        <Route  path='/Videopl/:id' element={<Watch/>} />
        <Route  path='/FilmName' element={<Overlay/>} />
        <Route  path='/Authorization' element={<Autorize/>} />
        <Route  path='/Logout' element={<Logout/>} />
        <Route  path='/' element={<Center/>} />
      </Routes>
      <Footer/> 
    </BrowserRouter>
  </React.StrictMode>,
)
