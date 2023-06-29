import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faRotateRight, faFire, faFaceSmile, faChild, faWandSparkles, faUser, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
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
          <li><NavLink to="/Fresh"><FontAwesomeIcon icon={faRotateRight}/></NavLink> Fresh Movies </li>
          <li><NavLink to="#"><FontAwesomeIcon icon={faFire}/></NavLink> Trending Now </li>
        </ul>
        <p>Popular Genres</p>
        <ul className='Popular'>
          <li><NavLink to="#"><FontAwesomeIcon icon={faFaceSmile}/></NavLink> Comedy </li>
          <li><NavLink to="#"><FontAwesomeIcon icon={faChild}/></NavLink> Cartoons </li>
          <li><NavLink to="#"><FontAwesomeIcon icon={faWandSparkles}/></NavLink> Fantasy </li>
        </ul>
        <p>General</p>
        <ul className='General'>
          <li><NavLink to="#"><FontAwesomeIcon icon={faUser}/></NavLink> Profile </li>
          <li className='special'><NavLink to="#"><FontAwesomeIcon icon={faArrowRightFromBracket}/></NavLink> Logout </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
