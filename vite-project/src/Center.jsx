import { useState } from 'react'
import './Center.css'
import { NavLink } from 'react-router-dom'

function Center() {
  const [count, setCount] = useState(0)
  function Click_Afisha(number){
    if(number==1){
        window.location.href = "http://localhost:5173/Videopl"
    }
  };
  return (
    <div className="Center1">
        <p>Watch movies online every day</p>
        <p className="Head__Banner"></p>
        <div className="Dop__Banner">
            <h1>ENCANTO</h1>
            <h3>CARTOONS, COMEDY</h3>
            <NavLink to="/Videopl"><button  className="Button_Afisha">Watch</button></NavLink>  
        </div>
        <div className="Top__Film">
            <p>This week's Top films</p>
            <table className='Margin__Setting'>
                <tr className='Margin__Setting'>
                    <th>
                        <div className="Movies__Class">
                            <NavLink to="/Videopl"><button><img className="Movies__Class2" src="./public/OneOne_A.png" alt="NONE" /></button> </NavLink>
                        </div>
                    </th>
                    <th>
                        <div className="Movies__Class">
                            <NavLink to="/Videopl"><img className="Movies__Class2" src="Sunnypek_A.png" alt="NONE" /> </NavLink>  
                        </div>
                    </th>
                    <th>
                        <div className="Movies__Class">
                            <NavLink to="/Videopl"><img className="Movies__Class2" src="./public/Avatar_A.png" alt="NONE" /> </NavLink>  
                        </div>
                    </th>
                    <th>
                        <div className="Movies__Class">
                            <NavLink to="/Videopl"><img className="Movies__Class2" src="./public/Avatar_A.png" alt="NONE" /> </NavLink>  
                        </div>
                    </th>
                </tr>
                <p>Cartoons for the whole family</p>
                <tr>
                    <th>
                        <div className="Movies__Class">
                            <NavLink to="/Videopl"><img className="Movies__Class2" src="/Ralf.png" alt="NONE" /> </NavLink>  
                        </div>
                    </th>
                    <th>
                        <div className="Movies__Class">
                            <NavLink to="/Videopl"><img className="Movies__Class2" src="Sheep_A.png" alt="NONE" /> </NavLink>  
                        </div>
                    </th>
                    <th>
                        <div className="Movies__Class">
                            <NavLink to="/Videopl"><img className="Movies__Class2" src="Enkanto_A.png" alt="NONE" /></NavLink>  
                        </div>
                    </th>
                    <th>
                        <div className="Movies__Class">
                            <img className="Movies__Class2" src="Enkanto_A.png" alt="NONE" />
                        </div>
                    </th>
                </tr>
            </table>
        </div>
    </div>
  )
}

function ButtonWatch() {
    const [count, setCount] = useState(0)
    window.location.href = "http://localhost:5173/Videopl"
    return (
        <div>123</div>
    )
}
export default Center

/* <button onClick={() => Click_Afisha(2)} */