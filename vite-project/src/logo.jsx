import { useState } from 'react'
import './Header.css'

function Logo() {
  const [count, setCount] = useState(0)

  return (
    <div className="idk">
        <a href="#"><img src="./public/Logotype.png" alt="" /></a>
    </div>
  )
}

export default Logo