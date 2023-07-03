import React from 'react';
import './Fresh.css';
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Fresh = () => {
    return (
        <div className="Wrap">
            <table>
                <tr>
                    <th>
                        <div className="card">
                            <NavLink to="/Videopl/9"><img src="./public/Mega.jpg" alt="NONE" /></NavLink>
                            <ul>
                                <li>"The Black Demon"</li>
                                <li>Age:16+</li>
                                <li>Genre: Thriller, horror</li>
                                <li>Year:2023</li>
                            </ul>
                        </div>
                    </th>
                    <th>
                        <div className="card">
                            <NavLink to="/Videopl/10"><img  src="./public/Murder.jpg" alt="NONE" /></NavLink>
                            <ul>
                                <li>"Murder Mystery 2"</li>
                                <li>Age:16+</li>
                                <li>Genre: action, comedy</li>
                                <li>Year:2023</li>
                            </ul>
                        </div>
                    </th>
                    <th>
                        <div className="card">
                            <NavLink to="/Videopl/11"><img src="./public/The Last Kingdom.jpg" alt="NONE" /></NavLink>
                            <ul>
                                <li>"The Last Kingdom"</li>
                                <li>Age:18+</li>
                                <li>Genre: action, history</li>
                                <li>Year: 2023</li>
                            </ul>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="card">
                            <img  src="./public/jhon.jpg" alt="NONE" />
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
                            <img  src="./public/your.jpg" alt="NONE" />
                            <ul>
                                <li>"Your Place or Mine"</li>
                                <li>Age:18+</li>
                                <li>Genre: romantic</li>
                                <li>Year:2023</li>
                            </ul>
                        </div>
                    </th>
                    <th>
                        <div className="card">
                            <img  src="./public/fort.jpg" alt="NONE" />
                            <ul>
                                <li>"Operation Fortune"</li>
                                <li>Age:18+</li>
                                <li>Genre: action, comedy</li>
                                <li>Year:2023</li>
                            </ul>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="card">
                            <img  src="./public/gove.jpg" alt="NONE" />
                            <ul>
                                <li>"The Covenant"</li>
                                <li>Age:18+</li>
                                <li>Genre: action, drama</li>
                                <li>Year:2022</li>
                            </ul>
                        </div>
                    </th>
                    <th>
                        <div className="card">
                            <img  src="./public/disaster.jpg" alt="NONE" />
                            <ul>
                                <li>"My beautiful disaster"</li>
                                <li>Age:18+</li>
                                <li>Genre: comedy, drama</li>
                                <li>Year:2022</li>
                            </ul>
                        </div>
                    </th>
                    <th>
                        <div className="card">
                            <img  src="./public/guard.jpg" alt="NONE" />
                            <ul>
                                <li>"Guardians of the Galaxy"</li>
                                <li>Age:16+</li>
                                <li>Genre: action, comedy, fantasy</li>
                                <li>Year:2023</li>
                            </ul>
                        </div>
                    </th>
                    <th>
                    </th>
                </tr>
            </table>
        </div>
    
    );
}

export default Fresh;