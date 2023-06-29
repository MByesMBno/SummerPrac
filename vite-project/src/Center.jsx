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
            <table className='Margin__Setting'>
                <tr className='Margin__Setting'>
                    <th>
                        <div className="Movies__Class">
                            <img src="./public/OneOne_A.png" alt="NONE" />
                        </div>
                    </th>
                    <th>
                        <div className="Movies__Class">
                            <img src="./public/Sunnypek_A.png" alt="NONE" />
                        </div>
                    </th>
                    <th>
                        <div className="Movies__Class">
                            <img src="./public/Avatar_A.png" alt="NONE" />
                        </div>
                    </th>
                </tr>
                <p>Cartoons for the whole family</p>
                <tr>
                    <th>
                        <div className="Movies__Class">
                            <img src="./public/OneOne_A.png" alt="NONE" />
                        </div>
                    </th>
                    <th>
                        <div className="Movies__Class">
                            <img src="./public/Sunnypek_A.png" alt="NONE" />
                        </div>
                    </th>
                    <th>
                        <div className="Movies__Class">
                            <img src="./public/Avatar_A.png" alt="NONE" />
                        </div>
                    </th>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Center