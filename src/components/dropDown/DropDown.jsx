import React from 'react'
import "../dropDown/ddStyling.css"
import { Link } from "react-router-dom";

export const DropDown = () => {

    

  return (

    
    

    <section className="dropdown-container">
        <nav id="navbar" className="navigation" role="navigation">
          <input id="toggle-dropdown" type="checkbox" />
          <label className="dropdown" htmlFor="toggle-dropdown">
            <div className="top"></div>
            <div className="middle"></div>
            <div className="bottom"></div>
          </label>
          <nav className="menu-dropdown">

            <Link to="/" >Auctions</Link>
            <Link to="" >About</Link>
            <Link to="" >Contact</Link>
            <Link to="/profile" >Profile</Link>
            <Link to="/create-auction" >Create auction</Link>
            <Link to="/signup" >Sign in / Register</Link>

          </nav>
        </nav>
      </section>
  )
}
