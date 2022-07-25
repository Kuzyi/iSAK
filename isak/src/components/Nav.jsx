import React from 'react'
import { Link } from 'react-router-dom'


const Nav = (props) => {
  
  return (
    <nav className="navbar">
      <h4>iSAK</h4>
      <div>
      <Link to="/">Home</Link>
      <Link to="notepads">Notepad</Link>
      <Link to="new">Add Boat</Link>
      </div>
    </nav>
  )
}

export default Nav
