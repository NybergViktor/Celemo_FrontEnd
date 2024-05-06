import { Link } from "react-router-dom";
import "../header/Header.css";
import { useContext } from "react";
import LoginContext, { LoginProvider } from "../context/LoginContext";

const Header = () => {
  const { handleLoginClick } = useContext(LoginContext);

  return (
    <div className="header-container">
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

      {/** Temp button to login as admin, can be deleted later */}
      <button onClick={handleLoginClick}>Admin Login</button>

      <div className="logo-container">
        <Link to="/">
          <img src="src\assets\logo.png" className="logo" href="index.html" />
        </Link>
      </div>
    </div>
  );
};
export default Header;
