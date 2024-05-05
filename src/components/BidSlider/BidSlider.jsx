import "../BidSlider/BidStyle.css";
import { AuctionContext } from "../context/AuctionContext";
import { useContext, useState, useEffect } from "react";
import { BidContext, BidProvider } from "../context/BidsContext";

const Slider = () => {
  const { auction, setAuction, fetchAuction } = useContext(AuctionContext);

  const { maxBid, setMaxBid, startBid, setStartBid, fetchBid } =
    useContext(BidContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.error) {
      console.log("error: " + e.error);
    }

    if (maxBid === "") {
      maxBid
    }

    console.log(startBid + " startb");
    console.log(maxBid + " maxb");

    fetchBid();

    setStartBid("");
    setMaxBid("");
  };

  //toggle autobid container
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };
  //toggle main container
  const [sliderActive, setSliderActive] = useState(false);

  const handleSlider = () => {
    setSliderActive((current) => !current);
  };

  useEffect(() => {
    fetchAuction();
  }, []);

  let bids = [auction.bid];

  return (
    <div className={sliderActive ? "sliderContainer" : "sliderContainerOff"}>
      <button className="openSlider" type="button" onClick={handleSlider}>
        PLACE BID
      </button>

      <div className="test">
        <button className="min" type="button" onClick={handleSlider}>
          <p>-</p>
        </button>

        <div className="currentPrice">{auction.currentPrice}Kr</div>
        <div className="bidsContainer">Bids: {bids.length}</div>
      </div>
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="auto-con">
          <input
            className="bid"
            type="text"
            placeholder="BID"
            value={startBid}
            onChange={(e) => setStartBid(e.target.value)}
            required
          />
          <div className="check-container">
            <label className="check">
              <button type="button" id="myCheck" onClick={handleClick}></button>
              <span className={isActive ? "ch" : "checkmark"}>
                <p>Auto-Bid</p>
              </span>
            </label>
          </div>
        </div>

        <div className={isActive ? "auto-bid-container" : "notActive"}>
          <input
            className="auto-bid"
            type="text"
            placeholder="AUTO-BID"
            value={maxBid}
            onChange={(e) => setMaxBid(e.target.value)}
          />
        </div>

        <button className="submit" type="submit">
          PLACE BID
        </button>
      </form>
    </div>
  );
};

export default Slider;
