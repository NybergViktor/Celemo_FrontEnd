import "../BidSlider/BidStyle.css";
import { AuctionContext } from "../context/AuctionContext";
import { useContext, useState, useEffect, useCallback } from "react";

const Slider = () => {
  const { auction, setAuction, fetchAuction } = useContext(AuctionContext);

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  useEffect(() => {
    fetchAuction();
  }, []);

  let bids = [auction.bid];

  

  return (
    <div className="sliderContainer">
      <div className="currentPrice">{auction.currentPrice}Kr</div>
      <div className="bidsContainer">Bids: {bids.length}</div>
      <form className="formContainer">
        <div className="auto-con">
          <input
            className="bid"
            type="text"
            placeholder="BID"
            required
          />
          <div  className="check-container">
            <label className="check">
              <button
                type="button"
                id="myCheck"
                onClick={handleClick}
              ></button>
              <span className={isActive ? "ch" : "checkmark"}>
                <p>Auto-Bid</p>
              </span>
            </label>
          </div>
        </div>

        <div className={isActive ? "auto-bid-container" : "notActive"}>
          <input className="auto-bid" type="text" placeholder="AUTO-BID" />
        </div>

        <button className="submit" type="submit">
          PLACE BID
        </button>
      </form>
    </div>
  );
};

export default Slider;
