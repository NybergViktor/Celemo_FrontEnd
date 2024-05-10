import React from "react";
import "../dropDown/ddStyling.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const DropDown = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className="dropdown-container">
        <nav id="navbar" className="navigation" role="navigation">
          <input id="toggle-dropdown" type="checkbox" onClick={handleClick} />
          <label className="dropdown" htmlFor="toggle-dropdown">
            <div className="top"></div>
            <div className="middle"></div>
            <div className="bottom"></div>
          </label>
        </nav>
      </div>

      <div className={isActive ? "dropdown-active" : "dropdown-not-active"}>
          <Link className="dd-link" to="/">Auctions</Link>
          <Link className="dd-link" to="">About</Link>
          <Link className="dd-link" to="">Contact</Link>
          <Link className="dd-link" to="/profile">Profile</Link>
          <Link className="dd-link" to="/create-auction">Create auction</Link>
          <Link className="dd-link" to="/signup">Register</Link>
          <Link className="dd-link" to="/login">Log in</Link>
      </div>
    </>
  );
};
