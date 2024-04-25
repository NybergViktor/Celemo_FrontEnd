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
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="index.html">Home</a>
        <a href="#">Sign In</a>
        <a href="#">Register</a>
      </div>
    </footer>
  );
};

export default Footer;
