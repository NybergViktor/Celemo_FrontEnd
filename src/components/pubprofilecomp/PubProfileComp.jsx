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
        <section className="fieldsMainContainer">
            <div className="userinfo">
                <div key={userData.id}>

                    <div className="profilePic">
                    <img src={userData.photo} />
                    </div>

                    <div className="fieldContainer">
                      <p className="fieldName">Username:</p>
                      <div className="fieldContent">
                        <p>{userData.username}</p>
                      </div>
                    </div>

                    <div className="fieldContainer">
                            <p className="fieldName">City:</p>
                                <div className="fieldContent">
                            <p>{userData.adress_city}</p>
                        </div>
                    </div>

                    <div className="fieldContainer">
                        <p className="fieldName">Grade:</p>
                            <div className="fieldContent">
                        <p>{Math.round(userData.grade)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
    );
};

export default PubProfileComp;