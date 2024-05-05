import { Upload } from "react-bootstrap-icons";
import "../infoFields/UploadIcon.css";
import { useState } from "react";

//arrow function for the icon color
const Icon = () => {
  // const [changeIconColor, setChangeIconColor] = useState("grey")

  const [iconColor, setIconColor] = useState("grey");

  // creating an arrow function
  // const handleClick = () => {
  //   //if color is grey it updates the state to color orange
  //   if (changeColor === "grey") {
  //     setChangeColor("#F19D6F");
  //     // if color is something else then grey it upgrades the state to grey
  //   } else {
  //     setChangeColor("grey");
  //   }
  // };

  return (
    <div id="icon-container" /* onClick={{setChangeColor}} */>
      <Upload size={50} color={iconColor} className="upload-icon" />
    </div>
  );
};

export default Icon;
