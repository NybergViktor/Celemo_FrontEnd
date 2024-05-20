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


  const [updatedUser, setUpdatedUser] = useState([]);
  
  const fetchUpdateUser = async (updatedUser) => {


    const options = {
      method: "PUT",
      headers: {"Content-Type": "application/json",},
      credentials: "include",
      body: JSON.stringify(updatedUser),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/update/${userData.userId}`,
        options
      );
      const fetchData = await response.json();
      console.log(fetchData);
    } catch (error) {
      console.log("Error fetching: " + error);
    }
  }


  return (
    <UserContext.Provider value={{ fetchUpdateUser, updatedUser, userData, getUserFromId, favourites, winningBidUser, getUserWinningBidFromId }}>

      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
