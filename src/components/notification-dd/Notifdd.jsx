import React, { useEffect } from "react";
import "./Notifdd.css";
import { useState, useContext } from "react";
import clock from "../../assets/565422.png";
import { connect, disconnect } from "../websocketService";
import { NotificationContext } from "../context/NotificationContext";

export const Notifdd = () => {
  //const [notifications, setNotifications] = useContext(WebSocketContext)
  const [notifications, setNotifications] = useState([]);
  const [antalNotif, setAntalNotif] = useState("");
  const { userNotif, fetchUsersNotifications, deleteUsersNotifications } =
    useContext(NotificationContext);

  useEffect(() => {
    let isMounted = true;

    const username = localStorage.getItem("loggedInUserId");

    if (username) {
      connect(
        username,
        (message) => {
          if (isMounted) {
            //console.log("WebSocket Message Received: ", message);

            setNotifications((prev) => [...prev, message]);
          }
        },
        () => {
          //console.log("WebSocket connected for user:", username);
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
  useEffect(() => {
    fetchUsersNotifications();
  }, []);
  useEffect(() => {
    setAntalNotif(notifications.length + userNotif.length);
  }, [userNotif]);

  const [isActive, setIsActive] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const handleClick = () => {
    setIsActive((current) => !current);
  };
  const handleDelete = () => {
    deleteUsersNotifications();
    fetchUsersNotifications();
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

            <div className="antalNotif">
              <p>{antalNotif}</p>
            </div>
            {notifications.length === 0 ? (
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
                  <li className="dd-miscNotif"></li>
                )}

                {userNotif.length > 0 ? (
                  userNotif.map((uNotif, index) => (
                    <li key={index} className="dd-miscNotif">
                      {uNotif.title}
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
