import "../auctionCreationContainer/AuctionSelectionDropdowns.css";
import RandomPic from "./checkboxRandomPicture/RandomPic";
import InfoFieldsCreateAuction from "./infoFields/InfoFieldsCreateAuction";

function AuctionSelectionDropdowns() {
  return (
    <div className="main-container">
      <div className="selection-container-top">
        <div className="selection-dropdown-top">
          <select className="category" id="category">
            <option value="category">Category</option>
          </select>
          <select className="sub-category" id="sub-category">
            <option value="sub-category">Sub Category</option>
          </select>
          <select className="celebrity-category" id="celebrity-category">
            <option value="celebrities">Celebrities</option>
          </select>
        </div>
        {/* cut out and put in new file to break it down better */}
      </div>
      <div className="selection-dropdown-bottom">
        <RandomPic />
        <InfoFieldsCreateAuction />
      </div>
    </div>
  );
}

export default AuctionSelectionDropdowns;
