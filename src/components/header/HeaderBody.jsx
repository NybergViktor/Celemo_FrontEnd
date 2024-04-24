import '../header/HeaderBody.css';

const headerBody = () => {
    return (
        <div className="headerBody">

        <div className="headerBody_left">
        <section class="dropdown-container">
          <nav id="navbar" class="navigation" role="navigation">
            <input id="toggle-dropdown" type="checkbox" />
            <label class="dropdown" for="toggle-dropdown">
              <div class="top"></div>
              <div class="middle"></div>
              <div class="bottom"></div>
            </label>

            <nav class="menu-dropdown">
              <a class="link1" href="index.html">Auctions</a>
              <a class="link1" href="index.html">About</a>
              <a class="link1" href="index.html">Contact</a>
              <a class="link1" href="index.html">Profile</a>
              <a class="link1" href="#">Create Auction</a>
              <a class="link1" href="#">Sign in / Register</a>
            </nav>
          </nav>
        </section>
        </div>
        <div className="headerBody_center"></div>

        <div className="headerBody_right">
        <img src = "src\assets\logo.png" class="logo"/>
        </div>

        </div>
    )
}
    export default headerBody;