import { Upload } from "react-bootstrap-icons";
import "../infoFields/UploadIcon.css";
import { useState } from "react";

//arrow function for icon
const Icon = () => {
  const [changeColor, setChangeColor] = useState("grey");


  // creating an arrow function
  const handleClick = () => {
    //if color is grey it updates the state to color orange
    if (changeColor === "grey") {
      setChangeColor("orange");
      // if color is something else then grey it upgrades the state to grey
    } else {
      setChangeColor("grey");
    }
  };

  return (
    <button id="btn" onClick={handleClick}>
      <Upload size={50} color={changeColor} className="upload-icon" />
    </button>
  );
};

export default Icon;
