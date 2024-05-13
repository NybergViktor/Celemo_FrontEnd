import React from "react";
import "./PubProfileComp.css";
import { UserContext } from "../context/UserContext";
import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AuctionContext } from "../context/AuctionContext";

export const PubProfileComp = () => {
    const inputRef = React.useRef(null);
    const { userData, setUserData, getPublicUserFromId } = useContext(UserContext);
    const { userId } = useParams(SearchContext);
    const { auction, usersAuctions, fetchUsersAuctions} = useContext(AuctionContext);

    console.log(userId);
    useEffect(() => {
        getPublicUserFromId(userId);
        fetchUsersAuctions(userId);
    }, [userId]);

    if (!userData) {
        return <div>Loading...</div>;
    }
    
    return (
        <>
        <section className="publicContainer">
            <div className="publicUserInfo">
                <div key={userData.id}>
                    <div className="publicProfilePic">
                    <img src={userData.photo} alt="No photo"/>
                    </div>

                    <div className="publicBox">
                    <div className="publicTitle">
                    User Info
                    </div>
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
                </div>
            </div>
        </section>
        <section className="publicContainer">
            <div className="publicBox">
        <div className="publicUserInfo">
        <div className="publicTitle">
                    Auctions
                    </div>
            {usersAuctions.map((auction) => {
                return (
                    
                    <div key={auction.id}>
                        <div className="publicAuctionContainer">
                            <div className="publicAuctionContent">
                            <p>{auction.title}</p>
                            <Link
                            key={auction.id}
                            className="publicAuctionLink"
                            ref={inputRef}
                            onClick={() => setAuctionId(auction.id)}
                            to={`/auction/find-one/${auction.id}`}>

                            <button className="auctionbutton">View</button>

                            </Link>
                        </div>
                    </div>
            </div>
            
    );})}
    </div>
    </div>
    </section>
    </>
    );
};

export default PubProfileComp;