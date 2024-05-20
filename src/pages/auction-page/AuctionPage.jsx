import React from "react";
import { useEffect, useContext } from "react";
import { Auction } from "../../components/Auction/Auction";
import Header from "../../components/header/Header";
import "../auction-page/AuctionPage.css";
import Slider from "../../components/BidSlider/BidSlider";
import { useParams } from "react-router-dom";
import { SearchContext } from "../../components/context/SearchContext";
import { BidContext } from "../../components/context/BidsContext";
import { AuctionContext } from "../../components/context/AuctionContext";

const AuctionPage = () => {

  const { auction, fetchAuction, fetchAuctionTimeleft} =
  useContext(AuctionContext);

const { bidsAmount, fetchBidsAmount, fetchOneBid} =
  useContext(BidContext);

const { auctionId } = useParams(SearchContext);


useEffect(() => {
  fetchAuction(auctionId);
  fetchAuctionTimeleft(auctionId);
}, [auctionId]);

useEffect(() => {
  fetchBidsAmount(auctionId);
}, [bidsAmount]);




useEffect(() => {
  fetchOneBid(auction.bid);
}, [auction.bid]);



  return (
    <div className="mainContainer">
      <div className="header">
        <Header></Header>
      </div>
      <div className="auction">
        <Auction></Auction>
      </div>
      <div className="slider">{<Slider></Slider>}</div>
    </div>
  );
};

export default AuctionPage;
