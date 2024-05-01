import React from "react";
import Slider from "../../components/BidSlider/BidSlider";
import { Auction } from "../../components/Auction/Auction";
import Header from "../../components/header/Header";


const AuctionPage = () => {
  return (
    <div>
      <Header/>
      <Auction />
      <Slider />
    </div>
  );
};

export default AuctionPage;
