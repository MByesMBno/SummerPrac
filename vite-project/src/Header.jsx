import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faCompass, faRotateRight, faFire} from '@fortawesome/free-solid-svg-icons'
import './Header.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <div className="header">
      <div className="navbar">
        <p>Menu</p>
        <ul>
          <li><a href="#"><FontAwesomeIcon icon={faHome}/> Home</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faCompass}/> Discovery</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faRotateRight}/> Fresh Movies</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faFire}/> Trending Now</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
