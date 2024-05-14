import React from "react";
import "../Auction/AuctionStyle.css";

import { AuctionContext } from "../context/AuctionContext";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const Auction = () => {
  const {
    auction,
    fetchAuction,
    fetchAuctionTimeleft,
    timeleft,
  } = useContext(AuctionContext);

  const { auctionId } = useParams(SearchContext);

  const { userData, getUserFromId } = useContext(UserContext)

  useEffect(() => {
    fetchAuction(auctionId);
    fetchAuctionTimeleft(auctionId);
    getUserFromId(auction.seller);
  }, [auctionId]);
console.log(auction.seller + " seller id")
  return (
    <main>
      <div className="auction-container">
        <div className="img-container">
          <img src={auction.productPhoto} alt="photo" />
        </div>
        <div className="info-container">
          <div className="celeb">
            <p>{auction.celebrityName}</p>
          </div>
          <div className="auction-title">{auction.title}</div>
          <div className="description">{auction.productDescription}</div>

          <div className="endtime">{timeleft[0]} <br /> {timeleft[1]}</div>
          <div className="seller">
            <div>@{userData.username}</div>
            <button>Reviews</button>
          </div>
          <div className="location">
            <img
              className="pin"
              src="src/components/Auction/teenyicons_pin-solid.png"
              alt="location"
            />
            {userData.adress_city}
          </div>
         
        </div>
        <div className="blankWhite"></div>
      </div>
    </main>
  );
};
