import { createContext, useState, useEffect } from "react";

const PubUserContext = createContext();

const PubUserProvider = ({ children }) => {

  const [userData, setUserData] = useState({username: "", adress_city: "", grade: ""});
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/public-user/${userId}`,
        options
      );
      const fetchData = await response.json();
      setUserData(fetchData);
    } catch (error) {
      console.log("Error fetching: " + error);
    }
    finally {
      setLoading(false);
    }
  };


  return (
    <PubUserContext.Provider value={{ loading, userData, getPublicUserFromId }}>
      {children}
    </PubUserContext.Provider>
  );
};

export { PubUserContext, PubUserProvider };
