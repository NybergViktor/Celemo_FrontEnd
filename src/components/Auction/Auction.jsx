import React from "react";
import "../Auction/AuctionStyle.css";

import { AuctionContext } from "../context/AuctionContext";
import { useContext, useState } from "react";

export const Auction = () => {
  const { auction, setAuction } = useContext(AuctionContext);

  return (
    <main>
      <div className="auction-container">
        <div className="img-container">
          <img src="src/components/Auction/mj.jpeg" alt="shoes" />
        </div>
        <div className="info-container">
          <div className="celeb">
            <p>{auction.celebrityName}</p>
          </div>
          <div className="auction-title">Shoes from 1988</div>
          <div className="description">
          </div>

          <div className="location">London</div>
          <div className="seller">
            <div>@Gittan</div>
            <button>Reviews</button>
          </div>
        </div>
        <div className="blankWhite"></div>
      </div>
    </main>
  );
};
