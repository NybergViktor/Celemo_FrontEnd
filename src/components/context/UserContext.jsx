import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children, userId }) => {

  const [userData, setUserData] = useState([]);

  const getUserFromId = async (userId) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userId: userId,
      }),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/find-one`,
        options
      );
      let fetchData = await response.json();
      // console.log(fetchData);
      setUserData(fetchData);
    } catch (error) {
      console.log("Error fetching: " + error);
    }
  };

  return (
    <UserContext.Provider value={{ userData, getUserFromId }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
