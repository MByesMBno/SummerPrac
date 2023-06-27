import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="header">
      <div className="navbar">
        <ul>
          <li><a href="#"></a>Home</li>
          <li><a href="#"></a>Discovery</li>
          <li><a href="#"></a>Fresh Movies</li>
          <li><a href="#"></a>Trending Now</li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>
    </div>
  )
}

export default App
