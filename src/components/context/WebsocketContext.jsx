 import { createContext, useEffect, useState } from "react";
 import { connect, disconnect } from "../../websocketService"; // Adjust the import

 const WebsocketContext = createContext();

 const WebsocketProvider = ({ children }) => {
   const [notifications, setNotifications] = useState([]);
   const localStorageUserId = localStorage.getItem("loggedInUserId") || "";

   useEffect(() => {
    let isMounted = true;

    // console.log(username);
    // console.log(localStorageUserId);

    // se till att det matchar backend.. eller det som dynamiskt kommer skapas (se PlaceBid)
    if (!localStorageUserId) {
      console.error("No username found for WebSocket connection");
      return;
    }

    connect(
      localStorageUserId,
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
        console.log("WebSocket connected for user:", localStorageUserId);
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
   }, []);

   return (
     <WebsocketContext.Provider value={{ notifications }}>
       {children}
     </WebsocketContext.Provider>
   );
 };

 export { WebsocketContext, WebsocketProvider };
