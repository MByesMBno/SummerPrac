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
                        <NavLink to="/Videopl/24"><img src="./public/alone.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Home Alone"</li>
                            <li>Age:0+</li>
                            <li>Genre: comedy, family </li>
                            <li>Year:1990</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/25"><img  src="./public/gentle.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Gentlemen of fortune"</li>
                            <li>Age:6+</li>
                            <li>Genre: comedy, drama, criminal, detective </li>
                            <li>Year:1971</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/26"><img src="./public/cruella.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Cruella"</li>
                            <li>Age:12+</li>
                            <li>Genre: comedy, drama, criminal </li>
                            <li>Year:2021</li>
                        </ul>
                    </div>
                </th>
            </tr>
            <tr>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/27"><img  src="./public/mask.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"The Mask"</li>
                            <li>Age:12+</li>
                            <li>Genre: comedy, fantasy, criminal </li>
                            <li>Year:1994</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/28"><img  src="./public/hang.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Hangover"</li>
                            <li>Age:16+</li>
                            <li>Genre: comedy</li>
                            <li>Year:2009</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/29"><img  src="./public/Spider.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Spider-Man: Across the Spider-Verse"</li>
                            <li>Age:12+</li>
                            <li>Genre: cartoon, comedy, superheroes</li>
                            <li>Year:2023</li>
                        </ul>
                    </div>
                </th>
            </tr>
            <tr>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/30"><img  src="./public/jmur.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Zhmurki"</li>
                            <li>Age:16+</li>
                            <li>Genre: comedy, criminal</li>
                            <li>Year:2005</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/31"><img  src="./public/ted.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Ted"</li>
                            <li>Age:18+</li>
                            <li>Genre: comedy</li>
                            <li>Year:2012</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/32"><img  src="./public/yes.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"YES Man"</li>
                            <li>Age:12+</li>
                            <li>Genre: comedy</li>
                            <li>Year:2008</li>
                        </ul>
                    </div>
                </th>
            </tr>
            
        </table>
    </div>
    );
}

export default Trend;