import { createContext, useState } from "react";

const WebSocketContext = createContext();

const WebSocketProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  return (
    <WebSocketContext.Provider value={[notifications, setNotifications]}>
      {children}
    </WebSocketContext.Provider>
  );
};

export { WebSocketContext, WebSocketProvider };
