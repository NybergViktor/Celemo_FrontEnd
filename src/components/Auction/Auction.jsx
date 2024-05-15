import React from "react";
import "../Auction/AuctionStyle.css";

import { AuctionContext } from "../context/AuctionContext";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const Auction = () => {
  const { auction, fetchAuction, fetchAuctionTimeleft, timeleft } =
    useContext(AuctionContext);

  const { auctionId } = useParams(SearchContext);

  const { userData, getUserFromId } = useContext(UserContext);

  useEffect(() => {
    fetchAuction(auctionId);
    fetchAuctionTimeleft(auctionId);
  }, [auctionId]);
  useEffect(() => {
    getUserFromId(auction.seller);
  }, [auction.seller]);

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

          <div className="price">{auction.currentPrice}Kr</div>

          <div className="endtime">
            {timeleft[0]} <br /> {timeleft[1]}
          </div>
          <div className="location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            {userData.adress_city}
          </div>
          <div className="seller">
            <Link to={`/pubprofile/${auction.seller}`}>
              <div className="seller-username">@{userData.username}</div>
            </Link>
            <button>Reviews</button>
          </div>
          
        </div>
        <div className="blankWhite"></div>
      </div>
    </main>
  );
};
