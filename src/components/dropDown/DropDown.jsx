import React, { useEffect } from "react";
import "../dropDown/ddStyling.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { authenticate } from "../../helper";

export const DropDown = () => {
  const {logout} = useContext(AuthContext);
  const [isActive, setIsActive] = useState(false);
  const [loggedInUser, setLoggedInUser ] = useState((JSON.parse(localStorage.getItem("user"))))

  const auth = authenticate();

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const handleLogout = async () => {
    await logout();
    window.location.reload();
  }

  // useEffect(() => {
  //   console.log(loggedInUser)
  // }, [])

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
          {loggedInUser ? <><p className="dd-misc">Logged in as: {loggedInUser.username}</p><p className="dd-misc">____________</p></> : null}
          <Link className="dd-link" to="/">Auctions</Link>
          {auth ? <Link className="dd-link" to="/profile">Profile</Link> : null}
          {auth ? <Link className="dd-link" to="/create-auction">Create auction</Link> : null}
          <Link className="dd-link" to="/about">About</Link>
          <Link className="dd-link" to="/contact">Contact</Link>

          {auth ? null : <><p className="dd-misc">____________</p><Link className="dd-link" to="/signup">Register</Link></>}
          {auth ? null : <Link className="dd-link" to="/login">Log in</Link>}
          {auth ? <><p className="dd-misc">____________</p><Link className="dd-link" to="/" onClick={handleLogout}>Log out</Link></> : null}
      </div>
    </>
  );
};
