import { useState } from "react";
import AuctionContext from "../context/AuctionContext";
import "../BidSlider/BidStyle.css";

const Slider = () => {
  const [bids, setBids] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setBids("");
  };

  return (
    <div className="sliderContainer">
      <div className="currentPrice">25000kr</div>
      
      <div className="bidsContainer">32 BIDS</div>
      <form className="formContainer" >  
      {/* onSubmit={handleSubmit} */}
        
          <input
          className="bid"
            type="text"
            placeholder="BID"
            onChange={(e) => setBids(e.target.value)}
            required
          />
          <input
          className="auto-bid"
            type="text"
            placeholder="AUTO-BID"
            onChange={(e) => setBids(e.target.value)}
          />
          <button type="submit">Place Bid</button>
        
      </form>
    </div>
  );
};

export default Slider;
