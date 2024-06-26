import React from "react";
import "../Auction/AuctionStyle.css";

import { AuctionContext } from "../context/AuctionContext";
import { useContext, useEffect} from "react";
import { Link} from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { BidContext } from "../context/BidsContext";

export const Auction = () => {

  const { auction, timeleft } =
    useContext(AuctionContext);

  const { bidsAmount} =
    useContext(BidContext);

  const { userData, winningBidUser, getUserFromId } = useContext(UserContext);

  const localStorageUserId = localStorage.getItem("loggedInUserId");

  useEffect(() => {
    getUserFromId(auction.seller);
  }, [auction.seller]);

  function checkUserId() {
      if (userData.id === localStorageUserId) {
        return <Link to={`/profile`}>
          <div className="seller-username">@{userData.username}</div>
        </Link>;
      } else {
        return <Link to={`/pubprofile/${auction.seller}`}>
          <div className="seller-username">@{userData.username}</div>
        </Link>
      }
    
    }
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

          <div className="price">{auction.currentPrice}Kr </div>
          <div className="currentWinner">Currently winning bid: {winningBidUser.username}</div>

          <div className="endtime">
            <div className="amount">Amount of bids: {bidsAmount}</div>
            {timeleft[0]} <br /> {timeleft[1]}
          </div>
          <div className="location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            {userData.adress_city}
          </div>
          <div className="seller">
            {checkUserId()}
            <Link to={`/review/${auction.seller}`}>
            <button>Reviews</button>
            </Link>
          </div>
        </div>
        <div className="blankWhite"></div>
      </div>
    </main>
  );
};
