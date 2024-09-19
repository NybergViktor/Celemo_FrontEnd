import React, { useEffect } from "react";
import "./Notifdd.css";
import { useState, useContext } from "react";
import clock from "../../assets/565422.png";
import { WebSocketContext } from "../context/WebSocketContext";
import { connect, disconnect } from "../websocketService";

export const Notifdd = () => {


//const [notifications, setNotifications] = useContext(WebSocketContext)
const [notifications, setNotifications] = useState([]);
const [notificationList, setNotificationList] = useState([]);
useEffect(() => {
  let isMounted = true;

  const username = localStorage.getItem("loggedInUserId");
  // se till att det matchar backend.. eller det som dynamiskt kommer skapas (se PlaceBid)

  if (username) {
    connect(
      username,
      (message) => {
        if (isMounted) {
          // hanterar bara message om componenten är mountad
          // en lösning som gör att vi slipper se meddelandet två gånger
          // vilket är notmalt för useEffect i dev mode men irriterande
          console.log("WebSocket Message Received: ", message);

          setNotifications((prev) => [...prev, message]);
          // const currentArray = JSON.parse(localStorage.getItem("array"));

          // currentArray.push(message);

          //localStorage.setItem("array", JSON.stringify(notificationList));

          // setNotificationList((prev) => {
          //   const updatedList = [...prev, message];
          //   localStorage.setItem("array", JSON.stringify(updatedList));
          //   return updatedList;
          // });
        }
      },
      () => {
        console.log("WebSocket connected for user:", username);
      },
      (error) => {
        console.error("WebSocket connection error:", error);
      }
    );

    // cleanup
    return () => {
      isMounted = false;
      disconnect();
    };
  }
}, []);



  
  const [isActive, setIsActive] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  // useEffect(() => {
  //   const storedNotifications = localStorage.getItem("array");
  //   if (storedNotifications) {
  //     setNotifications(JSON.parse(storedNotifications)); // Parse as JSON
  //   } else {
  //     setNotifications([]); // Set to an empty array if no notifications exist
  //   }
  // }, []);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className="dropdown-containerNotif">
        <nav id="navbarNotif" className="navigationNotif" role="navigation">
          <input
            id="toggle-dropdownNotif"
            type="checkbox"
            onClick={handleClick}
          />
          <label className="dropdownNotif" htmlFor="toggle-dropdownNotif">
            <img src={clock} className="clock" />
          </label>
        </nav>
      </div>

      <div
        className={
          isActive ? "dropdown-activeNotif" : "dropdown-not-activeNotif"
        }
      >
        {loggedInUser ? (
          <>
            <p className="dd-miscNotif">
              Logged in as: {loggedInUser.username}
            </p>
            
            <ul>
              {notifications.length > 0 ? (
                notifications.map((notif, index) => (
                  <li key={index} className="dd-miscNotif">
                    {notif}
                  </li>
                ))
              ) : (
                <li className="dd-miscNotif">No notifications yet.</li>
              )}
            </ul>
          </>
        ) : null}
      </div>
    </>
  );
};
