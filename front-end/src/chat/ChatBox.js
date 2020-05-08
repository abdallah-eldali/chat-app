import React, {Component} from "react"
import MessagesBox from "./MessagesBox"
import UsersBox from "./UserBox"
import TextBox from "./TextBox"

class ChatBox extends Component{
  render(){
    return (
      <div>
        <MessagesBox socket={this.props.socket}/>
        <UsersBox />
        <TextBox />
      </div>
    );
  }
}

//Exporting the function
export default ChatBox;