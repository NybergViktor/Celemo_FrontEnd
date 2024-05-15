import "../infoFields/InfoFieldsCreateAuction.css";
import Icon from "./UploadIcon";
import InputFields from "./InputFields";

const InfoFieldsCreateAuction = () => {
  return (
    <>
      <div className="picture-container">
        <div className="picture">
          <Icon />
        </div>
      </div>

      <InputFields />
    </>
  );
};

export default InfoFieldsCreateAuction;
