import { useState } from 'react'
import './Center.css'

function Center() {
  const [count, setCount] = useState(0)

  return (
    <div className="Center1">
        <p>Watch movies online every day</p>
        <p className="Head__Banner"></p>
        <div className="Dop__Banner">
            <h1>ENCANTO</h1>
            <h3>CARTOONS, COMEDY</h3>
            <div className="Button_Afisha">Watch</div>
        </div>
        <div className="Top__Film">
            <p>This week's Top films</p>
            <table>
                <tr>
                    <th className='Movies__Class'>
                        <div className="Map_One"></div>
                    </th>
                    <th>
                        <div className="Map_Two"></div>
                    </th>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Center