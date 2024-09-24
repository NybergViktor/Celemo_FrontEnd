import SockJS from "sockjs-client";
import Stomp from "stompjs";

let stompClient = null;

// metoden connect upprättar en WebSocket-anslutning med hjälp av
// SockJS och STOMP, och ansluter till backend
export const connect = ( onMessageReceived, onConnected, onError) => {
  const socket = new SockJS("http://localhost:8080/websocket");
  // backend websocket endpoint
  stompClient = Stomp.over(socket);

   const username = localStorage.getItem("loggedInUserId");

  stompClient.connect(
    {},
    (frame) => {
      console.log("WebSocket Connected: ", frame);

      // när anslutningen lyckas prenumererar den på användarens
      // privata kanal (/user/{username}/private) för att ta emot meddelanden.

      stompClient.subscribe(`/user/${username}/private`, (message) => {
        console.log("Received WebSocket message: ", message);
        try {
          const parsedMessage = isJsonString(message.body)
            ? JSON.parse(message.body)
            : message.body;
          //const parsedMessage = isJsonString(message.body) ? JSON.parse(message.body) : { text: message.body };
          // hantera både JSON och plain text
          // vid mottagning av ett meddelande skickas det till callback-funktionen onMessageReceived

          // Logga resultatet för felsökning
          console.log("Parsed WebSocket message: ", parsedMessage);
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
    // eslint-disable-next-line no-unused-vars
  } catch (e) {
    return false;
  }
  return true;
};
