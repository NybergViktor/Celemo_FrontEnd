import { Upload } from "react-bootstrap-icons";
import "../infoFields/UploadIcon.css";
import { useState } from "react";

const Icon = () => {
  const [changeColor, setChangeColor] = useState("grey");

  const handleClick = () => {
    setChangeColor("black");
  };

  return (
    <button id="btn" onClick={handleClick}>
      <Upload size={50} color={changeColor} className="upload-icon" />
    </button>
  );
};

export default Icon;
