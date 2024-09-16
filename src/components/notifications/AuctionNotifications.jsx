import { useState, useEffect } from "react";
import { connect, disconnect } from "../../websocketService";


function AuctionNotifications() {
    const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const username = localStorage.getItem("user") || "";
    // se till att det matchar backend.. eller det som dynamiskt kommer skapas (se PlaceBid)
    if (!username) {
        console.error("No username found for WebSocket connection");
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

    // cleanup
    return () => {
      isMounted = false;
      disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Auction Notifications</h1>
      <ul>
        {notifications.length > 0 ? (
          notifications.map((notif, index) => <li key={index}>{notif}</li>)
        ) : (
          <li>No notifications yet.</li>
        )}
      </ul>
    </div>
  );
}

export default AuctionNotifications;

