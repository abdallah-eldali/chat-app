const app = require("./app.js");

const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (clientSocket) => {
  console.log("Connected with user");

  io.on("disconnect", (clientSocket) => {
    console.log("User disconnected");
  });
});

server.listen(3001, () => {
  console.log("Listening to port http://localhost:3001");
});