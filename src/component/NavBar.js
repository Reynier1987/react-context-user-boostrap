import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className=" container">
        <Link className=" navbar-brand text-bg-light" to="/">
          User List One
        </Link>
        <Link className=" navbar-brand text-bg-light" to="/2">
          User List Two
        </Link>
        <Link className=" navbar-brand text-bg-light" to="/3/ 3">
          User List Three
        </Link>
        
      </div>
    </nav>
  );
}
