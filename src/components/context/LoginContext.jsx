import { createContext } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children, username, password }) => {
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

    const response = await fetch(
      "http://localhost:8080/api/auth/signin",
      options
    );
    if (response.status > 202) {
      console.log("something went wrong, check password or username");
    } else {
      console.log(`Logged in as ${username}`);
    }
    return response;
  };

  // Temp function for button in Header.jsx
  const handleLoginClick = async () => {
    await logIn((username = "admin45"), (password = "admin45"));
  };

  return (
    <LoginContext.Provider value={{ logIn, handleLoginClick }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
