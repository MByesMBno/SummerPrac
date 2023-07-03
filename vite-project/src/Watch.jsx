import { useParams } from 'react-router-dom'
import './Watch.css'

function Watch() {
  const { id } = useParams()
  const filmName = ["Encanto", "One plus one", "Blazing sun", "Avatar", "Avatar", "Ralf", "Sheep VS Wolves","Encanto","Encanto",
    "The Black Demon", "Murder Mystery 2", "The Last Kingdom",
    "Jhon Wick 4", "Your Place or Mine", "Operation Fortune",
    "The Covenant", "My beautiful disaster","Guardians of the Galaxy"]
  const filmStatus = ["Cartons", "Drama, comedy, biography", "Action movie", "Fantasy", "Fantasy", "Cartons", "Cartons", "Cartons", "Cartons",
    "thriller, horror", "Action, comedy", "Action, comedy",
    "Action","Romantic", "Action, comedy", "Action, drama", "comedy, drama",
    "Action, comedy, fantasy"]
  const filmDate = [2021, 2011, 2021, 2009, 2009, 2012, 2016, 2021, 2021, 
    2023, 2023, 2023, 2023, 2023, 2023, 2022, 2022, 2023]
  const filmMaker = ["USA", "France", "Russia", "USA", "Tilimilitramdiy", "USA", "Russia", "USA", "USA",
    "Canada", "Brusel", "USA", "USA", "Germany", "USA", "USA", "USA", "World"]
  return ( 
    <div className="VideoPlayer">
        <h1>{filmName[id]}</h1>
        <video className='Videos' controls width="700" src="Encanto.mp4"></video>
        <h1>{filmName[id]}:</h1>
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