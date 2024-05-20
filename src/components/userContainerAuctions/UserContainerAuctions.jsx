import { BidContext } from "../context/BidsContext";
import { AuctionContext } from "../context/AuctionContext";
import { useParams } from "react-router-dom";
import "./UserContainerAuctions.css";
import { Link } from "react-router-dom";

import { useContext, useEffect, useState } from "react";

const UserContainerAuctions = ({ btnTitle }) => {
  
  const [loggedInUserId] = useState(localStorage.getItem("loggedInUserId"));
  const { getBidsForUser, usersBids, noBids } = useContext(BidContext);
  const { allAuctions, fetchAllAuctions, fetchAuction } = useContext(AuctionContext);

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
    
    const data = allAuctions.map((auction) => {
      if (auction.id === auctionId) {
        return auction.title;
      }
    })
    return data;
  }
  if (!allAuctions) {
    return <p>Loading...</p>
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
              
              <Link className="pp-link" to={`/auction/find-one/${bid.auctionId}`}><p>Title: {getTitle(bid.auctionId)}</p></Link>
              <p>Bid: {bid.currentPrice} kr, Max Bid: {bid.maxPrice} kr</p>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  );
};

export default UserContainerAuctions;
