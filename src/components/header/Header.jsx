import { Link } from 'react-router-dom';
import "../header/Header.css";

const Header = () => {
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
<<<<<<< HEAD
            <a className="link1" href="index.html">
              Auctions
            </a>
            <a className="link1" href="#">
              About
            </a>
            <a className="link1" href="#">
              Contact
            </a>
            <a className="link1" href="#">
              Profile
            </a>
            <a className="link1" href="#">
              Create Auction
            </a>
            <a className="link1" href="#">
              Sign in
            </a>
            <a className="link1" href="signup.html">
              Register
            </a>
=======
            <Link to="/" >Auctions</Link>
            <Link to="" >About</Link>
            <Link to="" >Contact</Link>
            <Link to="/profile" >Profile</Link>
            <Link to="" >Create auction</Link>
            <Link to="/signup" >Sign in / Register</Link>
>>>>>>> e511cd4f9fbc62c80115d7e0257842fb1338f3ed
          </nav>
        </nav>
      </section>
      <div className="logo-container">
        <img src="src\assets\logo.png" className="logo" href="index.html"/>
      </div>
      
    </div>
  );
};
export default Header;
