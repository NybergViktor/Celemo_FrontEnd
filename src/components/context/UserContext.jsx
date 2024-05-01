import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children, userId }) => {
  // Saved user with all account info from getUserFromId method
  const [privateUserInfo, setPrivateUserInfo] = useState([]);

  const getUserFromId = async (userId) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userId: "65eedef949aaf15adc303069",
      }),
    };
    const response = await fetch("http://localhost:8080/api/user/find-one", options);
    const fetchData = await response;
    setPrivateUserInfo(fetchData);
  };

  useEffect(() => {
    if (privateUserInfo) {
      console.log(privateUserInfo.id)
    }
  }, [privateUserInfo]);

  return (
    <UserContext.Provider value={{ getUserFromId, privateUserInfo, userId }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
