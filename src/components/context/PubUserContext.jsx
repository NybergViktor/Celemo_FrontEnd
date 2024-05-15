import { createContext, useState, useEffect } from "react";

const PubUserContext = createContext();

const PubUserProvider = ({ children }) => {

  const [userData, setUserData] = useState({});

// ===========================================================
// GET PUBLIC USER FROM ID

  const getPublicUserFromId = async (userId) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include",
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/public-user/${userId}`,
        options
      );
      const fetchData = await response.json();
      setUserData(fetchData);
    } catch (error) {
      console.log("Error fetching: " + error);
    }
  };


  return (
    <PubUserContext.Provider value={{ userData, getPublicUserFromId }}>
      {children}
    </PubUserContext.Provider>
  );
};

export { PubUserContext, PubUserProvider };
