import React, {Component} from "react"
//Used to parse the query string in ReactJS
import queryString from 'query-string';
import io from 'socket.io-client';

class ChatBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      chat: []
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

  //What will happen when the components already rendered (mounted)
  componentDidMount(){
    console.log(this.getRoomName());
  }

  //What will happen right before the components get destroyed (unmounted)
  componentWillUnmount(){

  }

  render(){
    return (
      <div>

      </div>
    );
  }
}

//Exporting the function
export default ChatBox;