import React from 'react';
import {NavLink} from 'react-router-dom'
import './Autorize.css';

const Logout = () => {
    return (
        <div className="Logout">
            <NavLink to='/Center'><button>Are u wanna leave?</button></NavLink>
        </div>
    );
}

export default Logout;