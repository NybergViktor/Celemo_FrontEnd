import "./UserContainerMyAuctions.css";
import { AuctionContext } from "../context/AuctionContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const UserContainerMyAuctions = ({ btnTitle }) => {
  const { usersAuctions, fetchUsersAuctions } = useContext(AuctionContext);
  const [loggedInUserId, setLoggedInUserId] = useState(localStorage.getItem("loggedInUserId"));

  useEffect(() => {
    fetchUsersAuctions(loggedInUserId);
  }, []);

  return (
    <div className="userContainerContentMain">
        {usersAuctions.map((auction) => {
          return (
            <div key={auction.id} className="containerItem">
              <div className="dynamicItem">
                <Link to={`/auction/find-one/${auction.id}`}><p>Title: {auction.title}</p></Link>
                <p>Celebrity: {auction.celebrityName}</p>
              </div>
              <div className="containerItemBtn">
                <button className="dynamicItemBtn">{btnTitle}</button>
              </div>
            </div>
          );
        }
      )
        }
    </div>
  );
};

export default UserContainerMyAuctions;
