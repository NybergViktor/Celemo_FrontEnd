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
      console.log("didnt work");
    }

    console.log(startBid + " fetch start");
    console.log(maxBid + " fetch max");

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

  let bids = [auction.bid];

  useEffect(() => {
    fetchAuction();
  }, []);

  return (
    <>
      <div className={sliderActive ? "sliderContainer" : "sliderContainerOff"}>
        <div className="mainOne">
          <button className="openSlider" type="button" onClick={handleSlider}>
            PLACE BID
          </button>
        </div>
      </div>
      <div className={sliderActive ? "sliderContainer" : "sliderContainerOff"}>
        <div className="mainTwo">
          <div className="firstRow">
            <div className="currentPrice">{auction.currentPrice}Kr</div>
            <div className="bidsContainer">Bids: {bids.length}</div>
          </div>
          <button className="min" type="button" onClick={handleSlider}>
            <p>-</p>
          </button>
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
      </div>
    </>
  );
};

export default Slider;
