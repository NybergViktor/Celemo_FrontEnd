import React from "react";
import "./PubProfileComp.css";
import { PubUserContext } from "../context/PubUserContext";
import { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AuctionContext } from "../context/AuctionContext";

export const PubProfileComp = () => {
    const inputRef = React.useRef(null);
    const { userData, getPublicUserFromId } = useContext(PubUserContext);
    const { userId } = useParams(SearchContext);
    const { usersAuctions, fetchUsersAuctions} = useContext(AuctionContext);

    console.log(userId);
    useEffect(() => {
        getPublicUserFromId(userId);
        fetchUsersAuctions(userId);
    }, [userId]);

    if (!userData) {
        return <div>Loading...</div>;
    }
    if(userData.photo === null) {
        return userData.photo = "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png";
     }
    return (
        <>
        <section className="publicContainer">
            
                <div key={userData.id}>

                   

                    <div className="publicUserInfo">
                        
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
                    <button className="auctionbutton">See Reviews</button> //TODO: Fix reviews
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
                            <div className="publicfieldContainer">
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