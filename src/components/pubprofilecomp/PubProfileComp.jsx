import React from "react";
import "./PubProfileComp.css";
import { UserContext } from "../context/UserContext";
import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AuctionContext } from "../context/AuctionContext";
import { ReviewContext } from "../context/ReviewContext";

export const PubProfileComp = () => {
  const inputRef = React.useRef(null);
  const { userData, getPublicUserFromId } = useContext(UserContext);
  const { userId } = useParams(SearchContext);
  const { usersAuctions, fetchUsersAuctions } = useContext(AuctionContext);
  const {setReviewedUserId} = useContext(ReviewContext)

  console.log(userId + "pubProfile");
  useEffect(() => {
    getPublicUserFromId(userId);
    fetchUsersAuctions(userId);
    setReviewedUserId(userId)
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }
  if (userData.photo === null) {
    return (userData.photo =
      "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png");
  }
  return (
    <main className="pub-main-p-container">
      <div className="pub-main-container">
        <div className="publicProfilePic">
          <img src={userData.photo} alt="No photo" />
        </div>
        <section className="publicContainer">
          <div className="publicUserInfo" key={userData.id}>
            <div className="publicBoxMain">
              <div className="publicTitle">User Info</div>
              <div className="box">
                <div className="publicBox">
                  <div className="publicfieldContainer">
                    <p className="publicfieldName">Username:</p>
                    <div className="publicfieldContent">
                      <p>{userData.username}</p>
                    </div>
                  </div>
                  <div className="publicfieldContainer">
                    <p className="publicfieldName">City:</p>
                    <div className="publicfieldContent">
                      <p>{userData.adress_city}</p>
                    </div>
                  </div>
                  <div className="publicfieldContainer">
                    <p className="publicfieldName">Grade:</p>
                    <div className="publicfieldContent">
                      <p>{Math.round(userData.grade)}</p>
                    </div>
                  </div>
                </div>
                <div className="auctionbuttons">
                  <button>
                    Review User
                    <Link
                      key={userData.id}
                      className="startpageAuctionContainer"
                      onClick={setReviewedUserId(userData.id)}
                      to={`/reviews/create`}
                    >
                      Review User
                    </Link>
                  </button>
                  <button>See Review</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="publicContainerAuction">
          <div className="publicAuction">
            <div className="auctionTitle">Auctions</div>
            {usersAuctions.map((auction) => {
              return (
                <div className="publicAuctionContainer" key={auction.id}>
                  <div className="publicfieldContainerAuction">
                    <div className="auctionBox">
                      <p>{auction.title}</p>
                      <Link
                        key={auction.id}
                        className="publicAuctionLink"
                        ref={inputRef}
                        onClick={() => setAuctionId(auction.id)}
                        to={`/auction/find-one/${auction.id}`}
                      ></Link>
                    </div>
                    <button className="auctionbutton">
                      <p>See More</p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default PubProfileComp;
