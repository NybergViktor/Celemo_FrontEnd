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
            <Link to="/" >Auctions</Link>
            <Link to="" >About</Link>
            <Link to="" >Contact</Link>
            <Link to="/profile" >Profile</Link>
            <Link to="" >Create auction</Link>
            <Link to="/signup" >Sign in / Register</Link>
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
