import SockJS from "sockjs-client";
import Stomp from "stompjs";

let stompClient = null;

// metoden connect upprättar en WebSocket-anslutning med hjälp av
// SockJS och STOMP, och ansluter till backend
export const connect = (username, onMessageReceived, onConnected, onError) => {
  const socket = new SockJS("http://localhost:8080/websocket");
  // backend websocket endpoint
  stompClient = Stomp.over(socket);

  const storedUser = localStorage.getItem("user");
  const user = JSON.parse(storedUser);
  console.log("detta är användarens username", user.username);
  // const loggedInUserId = localStorage.getItem("loggedInUserId")

  stompClient.connect(
    {},
    (frame) => {
      console.log("WebSocket Connected: ", frame);

      // när anslutningen lyckas prenumererar den på användarens
      // privata kanal (/user/{username}/private) för att ta emot meddelanden.
      stompClient.subscribe(`/user/${user.username}/private`, (message) => {
        console.log("Received WebSocket message: ", message);
        try {
          const parsedMessage = isJsonString(message.body)
            ? JSON.parse(message.body)
            : message.body;
          // hantera både JSON och plain text
          // vid mottagning av ett meddelande skickas det till callback-funktionen onMessageReceived
          onMessageReceived(parsedMessage);
        } catch (e) {
          console.error("Error processing WebSocket message", e);
        }
      });

      // När en premunation är klar så körs callback onConnected
      if (onConnected) {
        onConnected();
      }
    },
    // vid fel körs den här callbacken
    (error) => {
      console.error("WebSocket connection error: ", error);
      if (onError) {
        onError(error);
      }
    }
  );
};

// metoden kopplar från websocket-anslutningen om den är aktiv
// om stompClient är ansluten, kopplas den bort och ett meddelande skrivs ut i konsolen
// om anslutningen inte finns, visas en varning om att ingen anslutning kan kopplas från.
export const disconnect = () => {
  if (stompClient !== null && stompClient.connected) {
    stompClient.disconnect(() => {
      console.log("WebSocket Disconnected");
    });
  } else {
    console.warn("WebSocket was not connected and therefor cannot disconnect.");
  }
};

// hjälpfunktion
const isJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
