import { io } from "socket.io-client";

let socket;

const socketConnection = (jwt) => {
  if (socket && socket.connected) {
    return socket;
  } else {
    const socket = io.connect("https://localhost:5000", {
      auth: {
        jwt,
      },
    });
    return socket;
  }
};
export default socketConnection;
