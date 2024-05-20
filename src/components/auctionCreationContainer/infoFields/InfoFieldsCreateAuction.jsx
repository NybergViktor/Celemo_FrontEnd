import "../infoFields/InfoFieldsCreateAuction.css";
import { useState, useContext } from "react";
import { CreateAuctionContext } from "../../context/CreateAuctionContext";
import { Upload } from "react-bootstrap-icons";


const InfoFieldsCreateAuction = () => {
  const { inputData, handleInputDataChange } = useContext(CreateAuctionContext);
  const [iconColor, setIconColor] = useState("grey");
  return (
    <>
      <div className="picture-container">
        <div className="picture">
          <div id="icon-container">
            <Upload size={50} color={iconColor} className="upload-icon" />
          </div>
        </div>
      </div>
      <div className="title-text-bottom">
        <label className="lable">
          <input
            className="title-input"
            type="text"
            name="title"
            placeholder="Title"
            value={inputData.title}
            onChange={handleInputDataChange}
          />
        </label>
      </div>

      <div className="description-bottom">
        <label className="lable">
          <textarea
            className="textarea"
            name="productDescription"
            placeholder="Write description here"
            cols="15"
            rows="8"
            value={inputData.productDescription}
            onChange={handleInputDataChange}
            required
          />
        </label>
        <div className="bid-bottom">
          <label className="lable">
            <input
              className="bid-input"
              type="number"
              name="startPrice"
              placeholder="Starting Bid"
              value={inputData.startPrice}
              onChange={handleInputDataChange}
            />
          </label>
          <label className="end-time" id="endDate">
          <select
            type="number"
            className="endDate"
            name="endDate"
            value={inputData.endDate}
            onChange={handleInputDataChange}
            required
          >
            <option value={7} > Select end date </option>
            <option value={3} > 3 days </option>
            <option value={5} > 5 days </option>
            <option value={7} > 7 days </option>
          </select>
          </label>
        </div>
      </div>
    </>
  );
};

export default InfoFieldsCreateAuction;


