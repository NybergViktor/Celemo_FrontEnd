import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [userData, setUserData] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [winningBidUser, setWinningBidUser] = useState([]);

  const getUserFromId = async (userId) => {
    const options = {
      method: "GET",
      headers: {"Content-Type": "application/json",},
      credentials: "include",
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/find-one/${userId}`,
        options
      );
      const fetchData = await response.json();
      // console.log(fetchData);
      setUserData(fetchData);
      setFavourites(fetchData.favouriteAuctions);
    } catch (error) {
      console.log("Error fetching: " + error);
    }
  };

  const getUserWinningBidFromId = async (userId) => {
    const options = {
      method: "GET",
      headers: {"Content-Type": "application/json",},
      credentials: "include",
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/find-one/${userId}`,
        options
      );
      const fetchData = await response.json();
      setWinningBidUser(fetchData)
    } catch (error) {
      console.log("Error fetching: " + error);
    }
  };

// ===========================================================
// GET PUBLIC USER FROM ID

  const getPublicUserFromId = async (userId) => {
    const options2 = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include",
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/public-user/${userId}`,
        options2
      );
      const fetchData = await response.json();
      setUserData(fetchData);
    } catch (error) {
      console.log("Error fetching: " + error);
    }
  };


  return (
    <UserContext.Provider value={{ userData, getUserFromId, favourites, getPublicUserFromId, winningBidUser, getUserWinningBidFromId }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
