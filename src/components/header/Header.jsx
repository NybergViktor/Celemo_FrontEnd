import { Link } from "react-router-dom";
import "../header/Header.css";
import { useContext } from "react";
import LoginContext, { LoginProvider } from "../context/LoginContext";
import { DropDown } from "../dropDown/DropDown";

const Header = () => {
  const { handleLoginClick } = useContext(LoginContext);

  return (
    <div className="header-container">
      <div className="dropdown-container">
        <DropDown></DropDown>
      </div>

      {/** Temp button to login as admin, can be deleted later */}
      <button className="admin-login" onClick={handleLoginClick}>Admin Login</button>

      <div className="logo-container">
        <Link to="/">
          <img src="src/assets/logo.png" className="logo" href="index.html" />
        </Link>
      </div>
    </div>
  );
};
export default Header;
