import React, {Component} from "react";
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from "../Message/Message"


//import "./Messages.css";

class Messages extends Component{
    
    //Returns a collection of Message components
    listOfMessages = () => {
        console.log("Messages: " + this.props.messages);
        return this.props.messages.map((message, i) => {
            console.log(message);
            console.log(message.username);
            console.log(message.message);
            return(
                <div key={i}>
                    <Message 
                        username={message.username}
                        message={message.message}
                    />
                </div>
            );
        });
    }
    
    render(){
        return(
            <div>
                <ScrollToBottom>
                    {this.listOfMessages()}
                </ScrollToBottom>
            </div>
        );
    }
    
}

export default Messages;