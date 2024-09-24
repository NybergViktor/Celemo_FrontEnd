import SockJS from "sockjs-client";
import Stomp from "stompjs";

let stompClient = null;


export const connect = (username, onMessageReceived, onConnected, onError) => {
  const socket = new SockJS("http://localhost:8080/ws");
  // backend websocket endpoint
  stompClient = Stomp.over(socket);

  stompClient.connect(
    {},
    (frame) => {
     

      
      stompClient.subscribe(`/user/${username}/private`, (message) => {
        
        try {
          const parsedMessage = isJsonString(message.body)
            ? JSON.parse(message.body)
            : message.body;
          
          onMessageReceived(parsedMessage);
        } catch (e) {
          console.error("Error processing WebSocket message", e);
        }
      });

      
      if (onConnected) {
        onConnected();
      }
    },
    
    (error) => {
      console.error("WebSocket connection error: ", error);
      if (onError) {
        onError(error);
      }
    }
  );
};


export const disconnect = () => {
  if (stompClient !== null && stompClient.connected) {
    stompClient.disconnect(() => {
      console.log("WebSocket Disconnected");
    });
  } else {
    console.warn("WebSocket was not connected, cannot disconnect.");
  }
};


const isJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
