import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Logo from './logo.jsx'
import Vl from './Vl.jsx'
import Center from './Center.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Vl />
    <Logo />
    <Header />
    <Center />
  </React.StrictMode>,
)
