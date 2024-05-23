import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  function checkLogin() {
    if (localStorage.getItem("loggedInUserId") === null) {
      return (
        <div className="footer-desktop">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Home</Link>
          <Link to="/login">Sign In</Link>
          <Link to="/signup">Register</Link>
        </div>
      );
    } else {
      return (
        <div className="footer-desktop">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/logout">Logout</Link>
        </div>
      );
    }
  }
  return (
    <footer className="footer">
      <div className="under">
        <a className="b" href="#">Contact</a>
        <a className="b" href="/about">About</a>
        <a className="b" href="/">Home</a>
      </div>
      <div className="over">
        {/*<a href="#">Sign In / Register</a>*/}
      </div>
      <>
      {checkLogin()}
      </>
    </footer>
  );
};

export default Footer;
