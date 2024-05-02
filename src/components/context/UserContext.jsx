import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children, userId }) => {
  // Saved user with all account info from getUserFromId method
//   const [privateUserInfo, setPrivateUserInfo] = useState([]);

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
        "http://localhost:8080/api/user/find-one",
        options
      );
      const fetchData = await response;
      setPrivateUserInfo(fetchData);
      return response;
    } catch (error) {
      console.log("Error fetching: " + error);
    }
  };

//   useEffect(() => {
//     getUserFromId(userId);
//   }, []);

  return (
    <UserContext.Provider value={{ getUserFromId, userId }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
