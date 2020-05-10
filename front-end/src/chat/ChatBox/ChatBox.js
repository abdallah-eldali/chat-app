import React, {Component} from "react"
import io from 'socket.io-client';

import Messages from "../Messages/Messages"

class ChatBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      socket : null,
      username: "",
      room: "",
      message: "",
      messages: []
    };
  }

  //Get the chat messages from the server when joining a room
  getChatMessages = () => {
  }

  //Get the query parameter (ie: the room name)
  getRoomName = () => {
    //Get the query parameters using the window object
    //from vanilla JS
    let search = window.location.search;
    //Parse the query string into an object
    let params = new URLSearchParams(search);
    //Use the get() function of the URLSearchParams object
    //to get the parameter of 'room'
    let roomName = params.get("room");
    //Return the roomName
    return roomName;
  }
  
  //Get the query parameter (ie: the room name)
  getUserName = () => {
    //Get the query parameters using the window object
    //from vanilla JS
    let search = window.location.search;
    //Parse the query string into an object
    let params = new URLSearchParams(search);
    //Use the get() function of the URLSearchParams object
    //to get the parameter of 'room'
    let username = params.get("username");
    //Return the roomName
    return username;
  }
  //What will happen when the components already rendered (mounted)
  componentDidMount(){
    //Intialize socket and store the room and name
    this.setState({ 
      room: this.getRoomName(),
      username: this.getUserName(),
      socket: io("http://localhost:3001")
    }, () => {
      console.log(this.state.username);
      console.log(this.state.room);
      this.state.socket.emit("LogIn", {
          username: this.state.username, 
          room: this.state.room
        });

      //Listen for any upcoming message object
      this.state.socket.on("message", (message) => {
        console.log("Message recieved from user: " + message.username + " - " + message.message);
        //since setState is async, we can't use this.state within it
        let newMessages = [...this.state.messages, message];
        console.log(newMessages);
        this.setState({messages: newMessages});
      });
    });

  }

  //What will happen right before the components get destroyed (unmounted)
  componentWillUnmount(){
    this.state.socket.emit("disconnect");
    this.state.socket.off();
  }

  sendMessage = (event) => {
    console.log("Sending the message: " + this.state.message);
    //Prevent the browser to refresh by pressing a button
    event.preventDefault();
    //if it exists
    if (this.state.message){
      this.state.socket.emit("sendMessage", this.state.message);
    }
  }

  render(){
    return (
      <div className="outerContainer">
        <Messages messages={this.state.messages}/>

        <div className="innerContainer">
        <input 
          value={this.state.message} 
          onChange={(event) => {this.setState({message: event.target.value})}}
          onKeyPress={(event) => (event.key === "Enter") ? this.sendMessage(event) : null}
        />
        </div>
      </div>
    );
  }
}

//Exporting the function
export default ChatBox;