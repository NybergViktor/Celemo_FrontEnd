import { createContext, useEffect, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children, username, password }) => {

  // Globally saved user after login
  const [loggedInUser, setLoggedInUser] = useState([]);
  

  // Login metod
  const logIn = async () => {
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

    let fetchData = [];

    const response = await fetch(
      "http://localhost:8080/api/auth/signin",
      options
    );
    if (response.status > 202) {
      console.log("something went wrong, check password or username");
    } else {
      console.log(`Logged in as ${username}`);
      fetchData = await response.json();
      setLoggedInUser(fetchData);
    }
    return response;
  };

  useEffect(() => {
    if (loggedInUser) {
      console.log(loggedInUser)
    }
  }, [loggedInUser]);

  // Temp function for button in Header.jsx
  const handleLoginClick = async () => {
    await logIn((username = "admin45"), (password = "admin45"));
  };

  return (
    <LoginContext.Provider value={{ logIn, handleLoginClick, loggedInUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
