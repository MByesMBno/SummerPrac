import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faCompass, faRotateRight, faFire, faFaceSmile, faChild, faWandSparkles, faUser, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <div className="header">
      <div className="navbar">
        <p>Menu</p>
        <ul className='Menu'>
          <li><NavLink to="/Center"><FontAwesomeIcon icon={faHome}/></NavLink> Home </li>
          <li><NavLink to="/Vl2"><FontAwesomeIcon icon={faCompass}/></NavLink> Discovery </li>
          <li><a href="#"><FontAwesomeIcon icon={faRotateRight}/></a> Fresh Movies </li>
          <li><a href="#"><FontAwesomeIcon icon={faFire}/></a> Trending Now </li>
        </ul>
        <p>Popular Genres</p>
        <ul className='Popular'>
          <li><a href="#"><FontAwesomeIcon icon={faFaceSmile}/></a> Comedy </li>
          <li><a href="#"><FontAwesomeIcon icon={faChild}/></a> Cartoons </li>
          <li><a href="#"><FontAwesomeIcon icon={faWandSparkles}/></a> Fantasy </li>
        </ul>
        <p>General</p>
        <ul className='General'>
          <li><a href="#"><FontAwesomeIcon icon={faUser}/></a> Profile </li>
          <li><a href="#"><FontAwesomeIcon icon={faArrowRightFromBracket}/></a> Logout </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
