import { Link } from "react-router-dom";
import "../header/Header.css";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import LoginContext, { LoginProvider } from "../context/LoginContext";
import { DropDown } from "../dropDown/DropDown";

const Header = () => {

  return (
    <div className="header-container">
      <div className="dropdown-container">
        <DropDown></DropDown>
      </div>

      

      <div className="logo-container">
        <Link to="/">
          <img src= {logo} className="logo" href="index.html"/>

        </Link>
      </div>
    </div>
  );
};
export default Header;
