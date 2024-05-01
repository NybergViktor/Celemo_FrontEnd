import { useState } from "react";
import AuctionContext from "../context/AuctionContext";

const Slider = () => {
  const [bids, setBids] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setBids("");
  };

  return (
    <div className="sliderContainer">
      {/* {AuctionContext} */}
      
      <div className="bidsContainer">{/* <p>{bids length}</p> */}</div>
      <form onSubmit={handleSubmit}>
        <div className="formInput">
          <input
            type="text"
            placeholder="BID"
            onChange={(e) => setBids(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="AUTO-BID"
            onChange={(e) => setBids(e.target.value)}
          />
          <button type="submit">Place Bid</button>
        </div>
      </form>
    </div>
  );
};

export default Slider;
