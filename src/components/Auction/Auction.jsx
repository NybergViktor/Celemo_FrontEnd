import React from "react";
import "../Auction/AuctionStyle.css";

import { AuctionContext } from "../context/AuctionContext";
import { useContext, useState, useEffect } from "react";

export const Auction = () => {
  const { auction, fetchAuction, seller } = useContext(AuctionContext);
  

  useEffect(() => {
    fetchAuction();
  }, []);

  return (
    <main>
      <div className="auction-container">
        <div className="img-container">
          <img src={auction.productPhoto} alt="shoes" />
        </div>
        <div className="info-container">
          <div className="celeb">
            <p>{auction.celebrityName}</p>
          </div>
          <div className="auction-title">{auction.title}</div>
          <div className="description">{auction.productDescription}</div>

          <div className="location">{seller.adress_city}</div>
          <div className="seller">
            <div>@{seller.username}</div>
            <button>Reviews</button>
          </div>
        </div>
        <div className="blankWhite"></div>
      </div>
    </main>
  );
};
