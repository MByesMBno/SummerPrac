import React from 'react';
import './Fresh.css';
import { NavLink } from 'react-router-dom'

const Cartoons = () => {
    return (
        <div className="Wrap">
        <table>
            <tr>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/33"><img src="./public/story.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Toy Story"</li>
                            <li>Age:0+</li>
                            <li>Genre: cartoon, comedy, family, fantasy </li>
                            <li>Year:1995</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/34"><img  src="./public/tim.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"The Nightmare Before Christmas"</li>
                            <li>Age:12+</li>
                            <li>Genre: cartoon, family, fantasy </li>
                            <li>Year:1993</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/35"><img src="./public/SP.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"South Park"</li>
                            <li>Age:18+</li>
                            <li>Genre: comedy, fantasy, cartoon</li>
                            <li>Year:1999</li>
                        </ul>
                    </div>
                </th>
            </tr>
            <tr>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/36"><img  src="./public/shrek.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Shrek"</li>
                            <li>Age:12+</li>
                            <li>Genre: comedy, fantasy, cartoon, family </li>
                            <li>Year:2001</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/37"><img  src="./public/Spirit.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Spirited Away"</li>
                            <li>Age:12+</li>
                            <li>Genre: comedy, anime, cartoon, fantasy, family</li>
                            <li>Year:2001</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/38"><img  src="./public/mono.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Princess Mononoke"</li>
                            <li>Age:12+</li>
                            <li>Genre: cartoon, anime, fantasy, drama, action</li>
                            <li>Year:1997</li>
                        </ul>
                    </div>
                </th>
            </tr>
            <tr>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/39"><img  src="./public/inc.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Monsters, inc"</li>
                            <li>Age:0+</li>
                            <li>Genre: cartoon, fantasy, family, comedy</li>
                            <li>Year:2001</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/40"><img  src="./public/ice.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"Ice Age"</li>
                            <li>Age:0+</li>
                            <li>Genre: cartoon, fantasy, family, comedy</li>
                            <li>Year:2002</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <NavLink to="/Videopl/41"><img  src="./public/notre.jpg" alt="NONE" /></NavLink>
                        <ul>
                            <li>"The Hunchback of Notre Dame"</li>
                            <li>Age:+</li>
                            <li>Genre: cartoon, drama, family</li>
                            <li>Year:1996</li>
                        </ul>
                    </div>
                </th>
            </tr>
            
        </table>
    </div>
    );
}

export default Cartoons;