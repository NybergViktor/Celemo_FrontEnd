import React from "react";

import { UserContext } from "../context/UserContext";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

export const PubProfileComp = () => {
    const { userData, setUserData, getUserFromId } = useContext(UserContext);
    const { userId } = useParams(SearchContext);

    useEffect(() => {
        getUserFromId(userId);
    }, [userId]);
    return (
        <div>
            <h1>Pub Profile</h1>
            <div className="Userinfo">
                
                    <div key={user.id}>
                        <h2>{user.username}</h2>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.address}</p>
                        <p>{user.postal}</p>
                        <p>{user.city}</p>
                        <p>{user.country}</p>
                    </div>
                
            </div>
        </div>
    );
};

export default PubProfileComp;