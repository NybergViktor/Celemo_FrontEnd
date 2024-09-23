import React from "react";
import { createContext } from "react";
import { useState } from "react";

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [userNotif, setUserNotif] = useState([]);

  const fetchUsersNotifications = async (
    userId = localStorage.getItem("loggedInUserId")
  ) => {
    var options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    try {
      
      let res = await fetch(
        `${import.meta.env.VITE_API_URL}/notif/find/all/user/${userId}`,
        options
      );
      const data = await res.json();
      setUserNotif(data);
    } catch (err) {
      console.log("err: " + err);
    }
  };
  return (
    <NotificationContext.Provider
      value={{ userNotif, fetchUsersNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationProvider, NotificationContext };
