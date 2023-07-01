import { useState } from 'react'
import './Watch.css'

function Watch(filmid) {
  const [count, setCount] = useState(0)
  return ( 
    <div className="VideoPlayer">
        <h1>Encanto | 2021</h1>
        <video className='Videos' controls width="700" src="Encanto.mp4"></video>
        <h1>Encanto:</h1>
        <table>
            <tr>
                <th>Category:</th>
                <th>Cartoon</th>
            </tr>
            <tr>
                <th>Year of release:</th>
                <th>2021</th>
            </tr>
            <tr>
                <th>Producer:</th>
                <th>USA</th>
            </tr>
        </table>
        <h1>About the film:</h1>
        <p>Cartoon about a kind girl and kindness! <br /> 
        There's no point in saying anything, it's better to look and find out for yourself,<br /> 
        haha, because I need a long text, and I write what comes to my mind.</p>
    </div>

  )
}

export default Watch

/*

<div className="VideoPlayer">
        <h1>Encanto | 2021</h1>
        <video className='Videos' controls width="700" src="Encanto.mp4"></video>
        <h1>Encanto:</h1>
        <table>
            <tr>
                <th>Category:</th>
                <th>Cartoon</th>
            </tr>
            <tr>
                <th>Year of release:</th>
                <th>2021</th>
            </tr>
            <tr>
                <th>Producer:</th>
                <th>USA</th>
            </tr>
        </table>
        <h1>About the film:</h1>
        <p>Cartoon about a kind girl and kindness! <br /> 
        There's no point in saying anything, it's better to look and find out for yourself,<br /> 
        haha, because I need a long text, and I write what comes to my mind.</p>
    </div>

*/