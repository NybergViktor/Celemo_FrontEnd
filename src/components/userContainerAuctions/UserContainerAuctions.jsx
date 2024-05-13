import { BidContext } from "../../context/BidsContext";
import "./UserContainerAuctions.css";

import { useContext, useEffect, useState } from "react";

const UserContainerAuctions = ({ btnTitle }) => {
  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );
  const { getBidsForUser, usersBids, noBids } = useContext(BidContext);

  useEffect(() => {
    getBidsForUser(loggedInUserId);
  }, []);

  useEffect(() => {
    console.log(usersBids);
  }, [usersBids]);

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
      );
    } else {
    }
  };

  return (
    <div className="userContainerContentMain">
      {bidContainer(noBids, usersBids)}
      {usersBids.map((bid) => {
        return (
          <div key={bid.id} className="containerItem">
            <div className="dynamicItem">
              <div className="dynamicItemInfo">
                <p>Auction ID: {bid.auctionId}</p>
                <p>
                  Current Price: {bid.currentPrice} kr, Max Bid: {bid.maxPrice}{" "}
                  kr
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserContainerAuctions;
