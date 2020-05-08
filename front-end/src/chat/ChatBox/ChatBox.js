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
  getChatMessages(){
    
  }

  //What will happen when the components already rendered (mounted)
  componentDidMount(){

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