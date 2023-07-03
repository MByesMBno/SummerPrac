import React from 'react';
import './Fresh.css';

const Trend = () => {
    return (
        <div className="Wrap">
        <table>
            <tr>
                <th>
                    <div className="card">
                        <img src="./public/alone.jpg" alt="NONE" />
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
                        <img  src="./public/gentle.jpg" alt="NONE" />
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
                        <img src="./public/cruella.jpg" alt="NONE" />
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
                        <img  src="./public/mask.jpg" alt="NONE" />
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
                        <img  src="./public/hang.jpg" alt="NONE" />
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
                        <img  src="./public/Spider.jpg" alt="NONE" />
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
                        <img  src="./public/jmur.jpg" alt="NONE" />
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
                        <img  src="./public/ted.jpg" alt="NONE" />
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
                        <img  src="./public/yes.jpg" alt="NONE" />
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