import { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Logo() {
  const [count, setCount] = useState(0)

  return (
    <div className="idk">
        <NavLink to="/"><img src="./public/Logotype.png" alt="" /></NavLink>
    </div>
  )
}

export default Logo