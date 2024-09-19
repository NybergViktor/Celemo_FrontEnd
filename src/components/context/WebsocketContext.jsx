import { createContext, useEffect, useMemo, useState } from "react";
import { connect, disconnect } from "../../websocketService";

const WebsocketContext = createContext();

const WebsocketProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const username = localStorage.getItem("loggedInUserId") || "";

  useEffect(() => {
    let isMounted = true;

    if (!username) {
      console.error("No username found for Websocket connection");
      return;
    }
   
    connect(
        username,
        (message) => {
          if (isMounted) {
            // hanterar bara message om componenten är mountad
            // en lösning som gör att vi slipper se meddelandet två gånger
            // vilket är notmalt för useEffect i dev mode men irriterande
            console.log("WebSocket Message Received: ", message);
            setNotifications((prev) => [...prev, message]);
          }
        },
        () => {
          console.log("WebSocket connected for user:", username);
        },
        (error) => {
          console.error("WebSocket connection error:", error);
        }
      );
    return () => {
        isMounted = false;
        disconnect();
    };
  }, []);

  const notificationValue = useMemo(() => ({notifications}), [notifications]);

  return (
    <WebsocketContext.Provider value={{notificationValue}}>
        {children}
        
    </WebsocketContext.Provider>
  )
};

export {WebsocketContext, WebsocketProvider};
