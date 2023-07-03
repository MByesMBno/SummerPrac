import { useParams } from 'react-router-dom'
import './Watch.css'

function Watch() {
  const { id } = useParams()
  const filmName = ["Encanto", "One plus one", "Blazing sun", "Avatar", "Avatar", "Ralf", "Sheep VS Wolves","Encanto","Encanto"]
  const filmStatus = ["Cartons", "Drama, comedy, biography", "Action movie", "Fantasy", "Fantasy", "Cartons", "Cartons", "Cartons", "Cartons"]
  const filmDate = [2021, 2011, 2021, 2009, 2009, 2012, 2016]
  const filmMaker = ["USA", "France", "Russia", "NoName", "NoName", "USA", "Russia", "USA", "USA"]
  return ( 
    <div className="VideoPlayer">
        <h1>{filmName[id]}</h1>
        <video className='Videos' controls width="700" src="Encanto.mp4"></video>
        <h1>Encanto:</h1>
        <table>
            <tr>
                <th>Category:</th>
                <th>{filmStatus[id]}</th>
            </tr>
            <tr>
                <th>Year of release:</th>
                <th>{filmDate[id]}</th>
            </tr>
            <tr>
                <th>Producer:</th>
                <th>{filmMaker[id]}</th>
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