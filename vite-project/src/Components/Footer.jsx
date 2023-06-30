import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className="Footer">
            <div className="wrap">
                <ul>
                    <li><div className="team">
                            <img src="./public/Logotype.png" alt="None" />
                            <p>You are on the site of CssFilm company, 
                                we provide high quality services in the field of Web-programming, 
                                and our company's employees are students of the best Russian university, SurGU.</p>
                        </div>
                    </li>
                    <li>
                        <div className="contacts">
                            <h3>Contacts</h3>
                            <p><FontAwesomeIcon icon={faHouse} /> 650125, Russia, Surgut, st. Energetikov, 22/1</p>
                            <p><FontAwesomeIcon icon={faPhone} /> +79505107876</p>
                        </div>
                    </li>
                    <li>
                        <div className="email">
                            <h3>E-mail</h3>
                            <p><FontAwesomeIcon icon={faEnvelope}/> kudinovpavel-1@rambler.ru</p>
                        </div>
                    </li>
                    <li>
                        <div className="useful">
                            <h3>Useful materials</h3>
                            <ul>
                                <li><a href="http://www.surgu.ru/index">Site of our University</a></li>
                                <li><a href="https://thebestschools.org/careers/career-guide/web-developer/">How to be a Web-Dev</a></li>
                                <li><a href="https://react.dev">React-tech</a></li>
                                <li><a href="https://sass-lang.com">Scss-tech</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;