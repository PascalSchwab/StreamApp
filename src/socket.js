import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  transports: ["websocket"],
  query: { password: "test" },
});

socket.on("connect", () => {
  console.log("Verbunden mit WebSocket vom Server");
});

socket.off("connect");

export default socket;