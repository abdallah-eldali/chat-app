const app = require("./app.js");

const server = require("http").createServer(app);
const io = require("socket.io")(server);

const {addUser, getUser, removeUser, getUsersInRoom} = require("./routes/users.js")

io.on("connection", (socket) => {
  console.log("Connected with user");

  socket.on("LogIn", function({username, room}){
    //console.log(username);
    const {error, user} = addUser({id: socket.id, username: username, room: room});

    if (error){
      console.log(error);
    }

    //Tell the client a welcome to the chat room message
    socket.emit('LogInMessage', {
      user: 'abdallah',
      text: `${user.name}, welcom to the room: ${user.room}`
    });

    //Tell everyone BUT the user in the specified room that he
    //has joined
    socket.broadcast.to(user.room).emit("LogInMessage", {
      user: 'abdallah',
      text: `${user.name}, joined the room`
    });

    //Join the client to a different room
    socket.join(user.room);
  });

  //Recieving a message from the client
  socket.on("sendMessage", (message) => {
    const user = getUser(socket.id);

    //Sending every socket who's in the same chat room
    //as the user the message recieved
    io.to(user.room).emit("message", {
      user: user.name, 
      message: message
    });
  });


  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(3001, () => {
  console.log("Listening to port http://localhost:3001");
});