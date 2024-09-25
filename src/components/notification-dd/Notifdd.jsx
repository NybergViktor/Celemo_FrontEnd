import React, { useEffect } from "react";
import "./Notifdd.css";
import { useState, useContext } from "react";
import clock from "../../assets/565422.png";
import { connect, disconnect } from "../websocketService";

export const Notifdd = () => {
  const [notifications, setNotifications] = useState([]);
  

  useEffect(() => {
    let isMounted = true;

    //samma som i backend
    const username = localStorage.getItem("loggedInUserId");
  

    if (username) {
      connect(
        username,
        (message) => {
          if (isMounted) {
            //använder mounted för att slippa se useEffect två gånger (dev)
            setNotifications((prev) => [...prev, message]);
          }
        },
        () => {
          console.log("WebSocket connected for: ", username);
        },
        (error) => {
          console.error("WebSocket connection error:", error);
        }
      );

      // återställ isMounted och disconnect
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

  const handleClick = () => {
    setIsActive((current) => !current);
  };
  const handleDelete = () => {
    setNotifications([])
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

            {notifications.length > 0 ? (
              <div className="antalNotif">
                <p>{notifications.length}</p>
              </div>
            ) : null}
            {notifications.length > 0 ? (
              <ul>
                <img
                  src="src/assets/Trash.png"
                  className="delButton"
                  onClick={handleDelete}
                ></img>
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
            ) : (
              <p className="dd-miscNotif">No notifications yet.</p>
            )}
          </>
        ) : null}
      </div>
    </>
  );
};
