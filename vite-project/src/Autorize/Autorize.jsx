import { useState } from 'react'
import './Autorize.css'
import { NavLink } from 'react-router-dom'

function Autorize() {
  return (
    <div className="Autorize">
        <p>Add account</p>
        <input className='InputBox__Name' name='Name' type="text"></input>
        <input className='InputBox__Name2' name='password' type="text"></input>
    </div>
  )
}
export default Autorize

/* <button onClick={() => Click_Afisha(2)} */