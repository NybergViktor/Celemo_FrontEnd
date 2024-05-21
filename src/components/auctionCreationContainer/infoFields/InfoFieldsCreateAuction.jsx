import "../infoFields/InfoFieldsCreateAuction.css";
import { useState, useContext, useEffect } from "react";
import { CreateAuctionContext } from "../../context/CreateAuctionContext";
import { Upload } from "react-bootstrap-icons";

const InfoFieldsCreateAuction = () => {
  const { inputData, handleInputDataChange, imageLink, saveImageLink, setImageLink, saveDataToBackend } = useContext(CreateAuctionContext);
  const [iconColor, setIconColor] = useState("grey");

  const handleImage = async (e) => {
    const value = e.target.value;
    await setImageLink(value);
  }

  useEffect(() => {
    saveImageLink();
  }, [imageLink]);

  const updateImage = () => {
    if (imageLink !== "") {
      return (
        <div id="icon-container">
          <img src={imageLink} />
        </div>
      )
    } 
    if (imageLink === "" ) {
      return (
        <div id="icon-container">
            <Upload size={50} color={iconColor} className="upload-icon" />
        </div>
      )
    }
  }

  return (
    <>
      <div className="image-text-bottom">
      {/* only accepting (.jpg and .png) */}
      <label  className="lable">
        <input type="text" name="productPhoto" id="image-text" placeholder="Paste in image link" onChange={handleImage} />
      </label>
      </div>
      <div className="picture-container">
        <div className="picture">
          {updateImage()}
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
              <option value={7}> Select end date </option>
              <option value={3}> 3 days </option>
              <option value={5}> 5 days </option>
              <option value={7}> 7 days (Default) </option>
            </select>
          </label>
        </div>
        <div className="publish-button-container">
        <button
          className="publish-button"
          type="submit"
          onClick={saveDataToBackend}
        >SUBMIT</button>
      </div>
      </div>
    </>
  );
};

export default InfoFieldsCreateAuction;
