import "../auctionCreationContainer/AuctionSelectionDropdowns.css";
import FrameTop from "./FrameTop";
import RandomPic from "./checkboxRandomPicture/RandomPic";
import InfoFieldsCreateAuction from "./infoFields/InfoFieldsCreateAuction";

function AuctionSelectionDropdowns() {
  return (
    <div className="main-container">
      <div className="svg">
          <svg
            width="368"
            height="412"
            viewBox="0 0 363 412"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20C0 8.9543 8.9543 0 20 0H343C354.046 0 363 8.95431 363 20V391.717C363 407.467 345.639 417.037 332.321 408.627L195.28 322.089C192.084 320.071 188.382 319 184.602 319H20C8.95432 319 0 310.046 0 299V20Z"
              fill="#363636"
            />
          </svg>
          </div>
      <div className="selection-container-top">
      
        <div className="selection-dropdown-top">
          
          <div className="title">
            <h2 className="title-text">Create Auction</h2>
          </div>
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
