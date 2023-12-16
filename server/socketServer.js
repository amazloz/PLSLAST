const io = require("./server").io;

const iceConfiguration = {};
iceConfiguration.iceServers = [
  {
    urls: "stun:stun1.l.google.com:19302",
  },
  {
    urls: "stun:stun3.l.google.com:19302",
  },
  {
    urls: "stun:stun4.l.google.com:19302",
  },
];
io.on("connection", (socket) => {
  console.log(socket.id, "has connected");
});
