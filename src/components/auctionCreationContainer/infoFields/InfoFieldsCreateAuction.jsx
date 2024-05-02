import { useState } from "react";
import "../infoFields/InfoFieldsCreateAuction.css";
import Icon from "./UploadIcon";

const InfoFieldsCreateAuction = () => {
  const [changeColor, setChangeColor] = useState("yellow")


  return (
    <div className="picture-container">
      <div className="picture">
        
          <Icon />
        
      </div>
    </div>
  );
};

export default InfoFieldsCreateAuction;
