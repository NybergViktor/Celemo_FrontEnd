import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="under">
        <a href="#">Contact</a>
        <a href="#">About</a>
        <a href="#">Home</a>
      </div>
      <div className="over">
        <a href="#">Sign In / Register</a>
      </div>
      <div className="footer-desktop">
<<<<<<< HEAD
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="index.html">Home</a>
        <a href="#">Sign In</a>
        <a href="signup.html">Register</a>
=======
        <Link to="">About</Link>
        <Link to="">Contact</Link>
        <Link to="/">Home</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Register</Link>
>>>>>>> e511cd4f9fbc62c80115d7e0257842fb1338f3ed
      </div>
    </footer>
  );
};

export default Footer;
