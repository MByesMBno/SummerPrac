import { useParams } from 'react-router-dom'
import './Watch.css'

function Watch() {
  const { id } = useParams()
  const filmName = ["Encanto", "One plus one", "Blazing sun", "Avatar", "Avatar", "Ralf", "Sheep VS Wolves","Encanto","Encanto",
    "The Black Demon", "Murder Mystery 2", "The Last Kingdom",
    "Jhon Wick 4", "Your Place or Mine", "Operation Fortune",
    "The Covenant", "My beautiful disaster","Guardians of the Galaxy",
    "Spider-Man: Across the Spider-Verse",
    "Silo(Serial)", "The witcher(serial)", "Fast X", "Librarian","Barbie", "Home Alone",
  "Gentlemen of fortune", "Cruella", "The Mask","Hangover","Spider-Man: Across the Spider-Verse",
"Zhmurki","Ted","YES Man","Toy Story","The Nightmare Before Christmas",
"South Park","Shrek","Spirited Away","Princess Mononoke","Monsters, inc",
"Ice Age","The Hunchback of Notre Dame","Game of Thrones(serial)","Pirates of the Caribbean",
"Harry Potter and Philosopher's Stone","The Lord of the Rings","Hobbit","Constantine",
"Supernatural","The Witcher","Malificent"]

  const filmStatus = ["Cartons", "Drama, comedy, biography", "Action movie", "Fantasy", "Fantasy", "Cartons", "Cartons", "Cartons", "Cartons",
    "thriller, horror", "Action, comedy", "Action, comedy",
    "Action","Romantic", "Action, comedy", "Action, drama", "comedy, drama",
    "Action, comedy, fantasy", "Drama, thriller, fantastic", "Romantic",
    "Action, comedy, fantasy", "Action, criminal", "Fantasy, action, adventure",
  "Fantasy, drama, comedy, adventure", "comedy, family", "comedy, drama, criminal, detective",
"comedy, drama, criminal", "comedy, fantasy, criminal","comedy","cartoon, comedy, superheroes",
"comedy, criminal","comedy","comedy","cartoon, comedy, family, fantasy","cartoon, family, fantasy",
"comedy, fantasy, cartoon","comedy, fantasy, cartoon, family","comedy, anime, cartoon, fantasy, family",
"cartoon, anime, fantasy, drama, action","cartoon, fantasy, family, comedy",
"cartoon, fantasy, family, comedy","cartoon, drama, family","fantasy, action, drama",
"fantasy, action, adventure","fantasy, family, fantastic, adventure","fantasy, action, drama, adventure",
"fantasy, action, drama, adventure","fantasy, action, detective, horror","fantasy, action, detective, horror",
"fantasy, action, adventure","fantasy, drama, family"]

  const filmDate = [2021, 2011, 2021, 2009, 2009, 2012, 2016, 2021, 2021, 
    2023, 2023, 2023, 2023, 2023, 2023, 2022, 2022, 2023, 2023, 2019, 2023, 2023,
  2023, 2023, 1990, 1971, 2021, 1994,2009,2023,2005,2012,2008,1995,1993,1999,2001,2001,
1997,2001,2002,1996,2011,2003,2001,2001,2012,2005,2005,2019,2014]

  const filmMaker = ["USA", "France", "Russia", "USA", "Tilimilitramdiy", "USA", "Russia", "USA", "USA",
    "Canada", "Brusel", "USA", "USA", "Germany", "USA", "USA", "USA", "World",
  "World","World","World", "USA","USA", "French", "USA", "USSR", "World", "USA",
"World","USA","RUSSIA","USA","USA","USA","USA","USA","World","World","World","World",
"World","World","New Zelland","World","Belarus","USA","Australiya","World","World","World","USA"]

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