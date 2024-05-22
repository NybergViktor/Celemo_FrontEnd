import React from "react";
import "./PubProfileComp.css";
import { PubUserContext } from "../context/PubUserContext";
import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AuctionContext } from "../context/AuctionContext";

export const PubProfileComp = () => {
  
  const inputRef = React.useRef(null);
  const { loading, userData, getPublicUserFromId } = useContext(PubUserContext);
  const { userId } = useParams(SearchContext);
  const { usersAuctions, fetchUsersAuctions } = useContext(AuctionContext);
  

  useEffect(() => {
    getPublicUserFromId(userId);
    fetchUsersAuctions(userId);
    console.log(JSON.stringify(userData) + "userData")
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }
  if (userData.photo === null || userData.photo === "") {
    return (userData.photo =
      "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png");
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    
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
                  
                    
                    <Link
                      
                      onClick={() => {
                      localStorage.setItem("reviewedUsername", userData.username);
                        localStorage.setItem("reviewedUserId", userId);
                      }}
                      to={`/reviews/create`}
                    >
                      Review User
                    </Link>
                  
                  <Link to= {`/review/${userId}`}>See Review</Link>
                  <Link
                      
                      onClick={() => {
                      localStorage.setItem("reportedUsername", userData.username);
                        localStorage.setItem("reportedUserId", userId);
                      }}
                      to={`/report/user`}
                    >
                      Report User
                    </Link>
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
                      <Link
                        key={auction.id}
                        className="publicAuctionLink"
                        ref={inputRef}
                        onClick={() => setAuctionId(auction.id)}
                        to={`/auction/find-one/${auction.id}`}
                      >
                      <p className="usersAuctionTitle">{auction.title}</p>
                      </Link>
                      <p className="currentPrice">Current Price: {auction.currentPrice}</p>
                      <button className="auctionbutton">
                      <Link
                        key={auction.id}
                        className="publicAuctionLink"
                        ref={inputRef}
                        onClick={() => setAuctionId(auction.id)}
                        to={`/auction/find-one/${auction.id}`}
                      >
                      <p>See More</p>
                      </Link>
                    </button>
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    
  );
};

export default PubProfileComp;
