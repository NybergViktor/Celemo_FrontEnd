import { AuctionContext } from "../context/AuctionContext";
import "./UserContainerAuctions.css";

import { useContext, useEffect, useState } from "react";

const UserContainerAuctions = ({ btnTitle }) => {
  
  const [loggedInUserId, setLoggedInUserId] = useState(localStorage.getItem("loggedInUserId"));
  const { usersAuctions, fetchUsersAuctions } = useContext(AuctionContext);

  useEffect(() => {
    
  }, []);

  return (
    <div className="userContainerContentMain">
      
        {/* {usersAuctions.map((auction) => {
          return (
            <div key={auction.id} className="containerItem">
              <div className="dynamicItem">
                <p>Title: , Celebrity: </p>
              </div>
            </div>
          );
        })} */}
      
    </div>
  );
};

export default UserContainerAuctions;
