import React from "react";
import { Auction } from "../../components/Auction/Auction";
import Header from "../../components/header/Header";
import "../auction-page/AuctionPage.css";
import Slider from "../../components/BidSlider/BidSlider";

const AuctionPage = () => {
  return (
    <div className="mainContainer">
      <div className="header">
        <Header></Header>
      </div>
      <div className="auction">
        <Auction></Auction>
      </div>
      <div className="slider">{/* <Slider></Slider> */}</div>
    </div>
  );
};

export default AuctionPage;
