import React from 'react';
import './Fresh.css';

const Cartoons = () => {
    return (
        <div className="Wrap">
        <table>
            <tr>
                <th>
                    <div className="card">
                        <img src="./public/got.jpg" alt="NONE" />
                        <ul>
                            <li>"Game of Thrones(serial)"</li>
                            <li>Age:18+</li>
                            <li>Genre: fantasy, action, drama </li>
                            <li>Year:2011</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <img  src="./public/pirat.jpg" alt="NONE" />
                        <ul>
                            <li>"Pirates of the Caribbean"</li>
                            <li>Age:12+</li>
                            <li>Genre: fantasy, action, adventure</li>
                            <li>Year:2003</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <img src="./public/harry.jpg" alt="NONE" />
                        <ul>
                            <li>"Harry Potter and Philosopher's Stone"</li>
                            <li>Age:12+</li>
                            <li>Genre: fantasy, family, fantastic, adventure</li>
                            <li>Year:2001</li>
                        </ul>
                    </div>
                </th>
            </tr>
            <tr>
                <th>
                    <div className="card">
                        <img  src="./public/lord.jpg" alt="NONE" />
                        <ul>
                            <li>"The Lord of the Rings"</li>
                            <li>Age:12+</li>
                            <li>Genre: fantasy, action, drama, adventure </li>
                            <li>Year:2001</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <img  src="./public/Hobb.jpg" alt="NONE" />
                        <ul>
                            <li>"Hobbit"</li>
                            <li>Age:6+</li>
                            <li>Genre: fantasy, action, drama, adventure</li>
                            <li>Year:2012</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <img  src="./public/const.jpg" alt="NONE" />
                        <ul>
                            <li>"Constantine"</li>
                            <li>Age:16+</li>
                            <li>Genre: fantasy, action, detective, horror</li>
                            <li>Year:2005</li>
                        </ul>
                    </div>
                </th>
            </tr>
            <tr>
                <th>
                    <div className="card">
                        <img  src="./public/super.jpg" alt="NONE" />
                        <ul>
                            <li>"Supernatural"</li>
                            <li>Age:16+</li>
                            <li>Genre: fantasy, action, detective, horror</li>
                            <li>Year:2005-2020(serial)</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <img  src="./public/witcher.jpg" alt="NONE" />
                        <ul>
                            <li>"The Witcher"</li>
                            <li>Age:18+</li>
                            <li>Genre: fantasy, action, adventure</li>
                            <li>Year:2019-now...(serial)</li>
                        </ul>
                    </div>
                </th>
                <th>
                    <div className="card">
                        <img  src="./public/mal.jpg" alt="NONE" />
                        <ul>
                            <li>"Malificent"</li>
                            <li>Age:12+</li>
                            <li>Genre: fantasy, drama, family</li>
                            <li>Year:2014</li>
                        </ul>
                    </div>
                </th>
            </tr>
            
        </table>
    </div>
    );
}

export default Cartoons;