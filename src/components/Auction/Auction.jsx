import React from "react";
import "../Auction/AuctionStyle.css";

import { AuctionContext } from "../context/AuctionContext";
import { useContext, useState, useEffect } from "react";

export const Auction = () => {
  const { auction, setAuction, fetchAuction } = useContext(AuctionContext);
  // const [seller, setSeller] = useState([]);

  useEffect(() => {
    fetchAuction();
    // setSeller(auction.seller);
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
          <div className="description"></div>

          <div className="location"></div>
          <div className="seller">
            <div></div>
            {/* <div>{auction.seller.username}</div>   FRÅGA HELENA VARFÖR DET INTE GÅR */}
            <button>Reviews</button>
          </div>
        </div>
        <div className="blankWhite"></div>
      </div>
    </main>
  );
};
