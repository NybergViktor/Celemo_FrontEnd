import { createContext, useEffect, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children, username, password }) => {
  // Globally saved user after login
  // const [loggedInUser, setLoggedInUser] = useState(false);
  // const [userInfo , setUserInfo] = useState([]);


  // Login metod
  const logIn = async (username, password) => {
    const loginData = {
      username: `${username}`,
      password: `${password}`,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(loginData),
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/signin",
        options
      );
      console.log(`Logged in as ${username}`);
      const fetchData = await response.json();
      // setUserInfo(fetchData);
      // setLoggedInUser(true);
      return response;
    } catch (error) {
      console.log("Error: " + error);
    }
    
  };

  

  // Temp function for button in Header.jsx
  const handleLoginClick = async () => {
    await logIn((username = "admin45"), (password = "admin45"));
  };

  return (
    <LoginContext.Provider value={{ logIn, handleLoginClick, username, password }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
