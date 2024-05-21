import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [winningBidUser, setWinningBidUser] = useState([]);
  const [foundUserAdminPage, setFoundUserAdminPage] = useState({});
  const [allUsers, setAllUsers] = useState([]);

  const getUserFromId = async (userId) => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
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


  // find user in admin page
  const fetchUserFromIdAdminPage = async (userId) => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/find-one/${userId}`,
        options
      );
      const fetchData = await response.json();
      console.log(fetchData + " fetch admin")
      setFoundUserAdminPage(fetchData)
    } catch (error) {
      console.log("Error fetching: " + error);
    }
  };


  const getAllUsers = async () => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/find/all`,
        options
      );
      const fetchData = await response.json();
      setAllUsers(fetchData);
    } catch (error) {
      console.log("Error fetching: " + error);
    }
  };

  const fetchDeleteUser = async (userId) => {
    
    const options = {
      method: "DELETE",
      headers: {"Content-Type": "application/json",},
      credentials: "include",
      body: JSON.stringify({
        userId: `${userId}`,
      }),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/delete`,
        options
      );
      const fetchData = await response.json();
      console.log(fetchData);
    } catch (error) {
      console.log("Error fetching: " + error);
    }
  }


    

  const getUserWinningBidFromId = async (userId) => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/find-one/${userId}`,
        options
      );
      const fetchData = await response.json();
      setWinningBidUser(fetchData);
    } catch (error) {
      console.log("Error fetching: " + error);
    }
  };

  const [updatedUser, setUpdatedUser] = useState([]);

  const fetchUpdateUser = async (updatedUser) => {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
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
  };

  return (
    <UserContext.Provider
      value={{
        allUsers,
        getAllUsers,
        fetchUpdateUser,
        updatedUser,
        userData,
        getUserFromId,
        favourites,
        winningBidUser,
        getUserWinningBidFromId,
        fetchUserFromIdAdminPage,
        foundUserAdminPage,
        fetchDeleteUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
