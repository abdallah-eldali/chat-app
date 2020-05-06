//Modules

//Used for request/response handling
const express = require("express");
//Used for instant bidirectional communication
const socket = require("socket.io");
//Used to resolve the path of the static resources
const path = require("path");

//Creating a Express object
const app = express();

//Serving static resources ("/" by default)
app.use(express.static(path.join(__dirname, "../public")));
//Parses JSON file from client to server
app.use(express.json());

app.listen(3000);
console.log("Server running http://localhost:3000/");