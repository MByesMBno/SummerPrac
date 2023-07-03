import React from 'react';
import './Autorize.css';


function Autorize() {
  return (
    <div className="Autorize">
        <h1>Add account</h1>
        <input  name='Name' type="text" placeholder='E-mail'></input>
        <input  name='password' type="password" placeholder='Password'></input>
        <button>Push me</button>
    </div>
  )
}
export default Autorize

/* <button onClick={() => Click_Afisha(2)} */