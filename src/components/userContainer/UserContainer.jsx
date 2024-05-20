import "./UserContainer.css";
import { Link } from "react-router-dom";
{/**
containerTitle = Name of the container
btnTitle = Name of the button
useContainerBtn = Show the button? accepted keyword "yes"
*/}
const UserContainer = ({children, containerTitle, btnTitle, useContainerBtn }) => {
  return (
    <div className="container">
      <div className="title">
        <p>{containerTitle}</p> 
        
        <button 
         
         id="c-btn" className={
          useContainerBtn === "yes" ? "containerBtn showContainerBtn" : "containerBtn"
          }><Link to={"/edit-profile"}>{btnTitle} </Link></button>
         
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default UserContainer;
