import "./UserContainerMyAuctions.css";
import { AuctionContext } from "../context/AuctionContext";
import { useContext, useEffect, useState } from "react";

const UserContainerMyAuctions = ({ btnTitle }) => {
  const { usersAuctions, fetchUsersAuctions } = useContext(AuctionContext);
  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("loggedInUserId")
  );

  useEffect(() => {
    fetchUsersAuctions(loggedInUserId);
  }, []);

  return (
    <div className="userContainerContentMain">
      
        {usersAuctions.map((auction) => {
          return (
            <div key={auction.id} className="containerItem">
              <div className="dynamicItem">
                <p>Title: {auction.title}, Celebrity: {auction.celebrityName}</p>
              </div>
              <div className="containerItemBtn">
                <button className="dynamicItemBtn">{btnTitle}</button>
              </div>
            </div>
          );
        })}
      
    </div>
  );
};

export default UserContainerMyAuctions;
