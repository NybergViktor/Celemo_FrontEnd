import "../header/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      
      <section className="dropdown-container">
        <nav id="navbar" class="navigation" role="navigation">
          <input id="toggle-dropdown" type="checkbox" />
          <label className="dropdown" for="toggle-dropdown">
            <div className="top"></div>
            <div className="middle"></div>
            <div className="bottom"></div>
          </label>

          <nav className="menu-dropdown">
            <a className="link1" href="index.html">
              Auctions
            </a>
            <a className="link1" href="index.html">
              About
            </a>
            <a className="link1" href="index.html">
              Contact
            </a>
            <a className="link1" href="index.html">
              Profile
            </a>
            <a className="link1" href="#">
              Create Auction
            </a>
            <a className="link1" href="#">
              Sign in / Register
            </a>
          </nav>
        </nav>
      </section>
      <div className="logo-container">
        <img src="src\assets\logo.png" className="logo" />
      </div>
      
    </div>
  );
};
export default Header;
