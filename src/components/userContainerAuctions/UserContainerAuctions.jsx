import { BidContext } from "../context/BidsContext";
import { AuctionContext } from "../context/AuctionContext";
import "./UserContainerAuctions.css";

import { useContext, useEffect, useState } from "react";

const UserContainerAuctions = ({ btnTitle }) => {
  
  const [loggedInUserId] = useState(localStorage.getItem("loggedInUserId"));
  const { getBidsForUser, usersBids, noBids } = useContext(BidContext);
  const { allAuctions, fetchAllAuctions, fetchAuction } = useContext(AuctionContext);
  const [ auctionTitle, setAuctionTitle ] = useState("Loading...");
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    getBidsForUser(loggedInUserId);
    fetchAllAuctions();
  }, []);

  useEffect(() => {
    console.log(usersBids);
  }, [usersBids])

  useEffect(() => {
    console.log(noBids);
  }, [noBids]);

  const bidContainer = (noBids) => {
    if (noBids === "No bids") {
      return (
        <div className="containerItem">
          <div className="dynamicItem">
            <p>No bids</p>
          </div>
        </div>
      )
    } 
  }

  const getTitle = (auctionId) => {
    const data = fetchAuction(auctionId);
    return data.title
  }

  // CONTAINS USERS ALL BIDS
  return (
    <div className="userContainerContentMain">
      {bidContainer(noBids, usersBids)}
      {usersBids.map((bid) => {

        return (
          <div key={bid.id} className="containerItem">
          <div className="dynamicItem">
            <div className="dynamicItemInfo">
              <p>Auction Title: {getTitle(bid.auctionId)}</p>
              <p>Current Price: {bid.currentPrice} kr, Max Bid: {bid.maxPrice} kr</p>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  );
};

export default UserContainerAuctions;
