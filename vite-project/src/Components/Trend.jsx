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
            <tr>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/21"><img  src="./public/forss.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Fast X"</li>
                            <li>Age:12+</li>
                            <li>Genre: action, criminal</li>
                            <li>Year:2023</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/22"><img  src="./public/bibl.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Librarian"</li>
                            <li>Age:18+</li>
                            <li>Genre: fantasy, action, adventure</li>
                            <li>Year:2023-now...(serial)</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/23"><img  src="./public/ken.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Barbie"</li>
                            <li>Age:12+</li>
                            <li>Genre: fantasy, drama, comedy, adventure</li>
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