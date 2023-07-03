import React from 'react';
import './Fresh.css';
import { NavLink } from 'react-router-dom'


const Trend = () => {
    return (
        <div className="Wrap">
        <table>
            <tr>
                <th>
                    <div className="card">
                    <NavLink to="/Videopl/15"><img  src="./public/gove.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Covenant"</li>
                            <li>Age:18+</li>
                            <li>Genre: action, drama</li>
                            <li>Year:2022</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/18"><img  src="./public/Spider.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Spider-Man: Across the Spider-Verse"</li>
                            <li>Age:12+</li>
                            <li>Genre: cartoon, comedy, superheroes</li>
                            <li>Year:2023</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/19"><img src="./public/Silo.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Silo(Serial)"</li>
                            <li>Age:18+</li>
                            <li>Genre: drama, thriller, fantastic</li>
                            <li>Year:2023</li>
                        </ul>
                    </div>
                </th>
            </tr>
            <tr>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/12"><img  src="./public/jhon.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Jhon Wick 4"</li>
                            <li>Age:18+</li>
                            <li>Genre: action</li>
                            <li>Year:2023</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/20"><img  src="./public/witcher.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"The witcher(serial)"</li>
                            <li>Age:18+</li>
                            <li>Genre: romantic</li>
                            <li>Year:2019-now...</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/17"><img  src="./public/guard.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Guardians of the Galaxy"</li>
                            <li>Age:16+</li>
                            <li>Genre: action, comedy, fantasy</li>
                            <li>Year:2023</li>
                        </ul>
                    </div>
                </th>
            </tr>
            
        </table>
    </div>
    );
}

export default Trend;