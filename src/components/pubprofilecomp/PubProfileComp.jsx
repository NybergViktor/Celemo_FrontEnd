import React from "react";

import { UserContext } from "../context/UserContext";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

export const PubProfileComp = () => {
    const { userData, setUserData, getPublicUserFromId } = useContext(UserContext);
    const { userId } = useParams(SearchContext);

    console.log(userId);
    useEffect(() => {
        getPublicUserFromId(userId);
    }, [userId]);
    return (
        <div>
            <h1>Pub Profile</h1>
            <div className="Userinfo">
                <div key={userData.id}>
                    <h2>{userData.username}</h2>
                    <p>{userData.email}</p>
                    <p>{userData.adress_city}</p>
                    <p>{userData.grade}</p>
                </div>
            </div>
        </div>
    );
};

export default PubProfileComp;