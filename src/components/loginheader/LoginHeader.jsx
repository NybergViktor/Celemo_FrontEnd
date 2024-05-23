
import { Link } from 'react-router-dom';
import "../header/Header.css";
import { useContext } from 'react';
import LoginContext, { LoginProvider } from '../context/LoginContext';
import { DropDown } from "../dropDown/DropDown";

const Header = () => {

  const {handleLoginClick} = useContext(LoginContext);

  return (
    <div className="header-container" id='header-container'>
       <div className="dropdown-container">
        <DropDown></DropDown>
      </div>
      
      <div className="logo-container" id='logo-container'>
      <Link to={"/"} className="home-link">
        <img src="src\assets\logo.png" className="logo" href="index.html"/>
        </Link>
      </div>
      
    </div>
  );
};
export default Header;

