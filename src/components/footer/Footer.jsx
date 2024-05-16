import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="under">
        <a className="b" href="#">Contact</a>
        <a className="b" href="#">About</a>
        <a className="b" href="/">Home</a>
      </div>
      <div className="over">
        {/*<a href="#">Sign In / Register</a>*/}
      </div>
      <div className="footer-desktop">
        <Link to="">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Register</Link>
      </div>
    </footer>
  );
};

export default Footer;
