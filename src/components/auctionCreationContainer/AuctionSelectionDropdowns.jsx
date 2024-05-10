import { useContext } from "react";
import { CreateAuctionContext, CreateAuctionProvider } from "../context/CreateAuctionContext";
import "../auctionCreationContainer/AuctionSelectionDropdowns.css";
import FrameBottom from "./FrameBottom";
import PublishButton from "./PublishButton";

function AuctionSelectionDropdowns() {
  const { categories } = useContext(CreateAuctionContext);

  return (
    <div className="main-container">
      <div className="svg1">
        <svg
          width="368"
          height="410"
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
          <div className="title-h1">
            <h2 className="title-text">Create Auction</h2>
          </div>
          <select className="category" id="category">
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <select className="sub-category" id="sub-category">
            <option value="sub-category" disabled>
              Sub Category
            </option>
            <option value="other">Other</option>
          </select>
          <select className="celebrity-category" id="celebrity-category">
            <option value="celebrities">Celebrities</option>
          </select>
        </div>
      </div>
      <FrameBottom />
      <PublishButton>Publish Auction</PublishButton>
    </div>
  );
}
export default AuctionSelectionDropdowns;
