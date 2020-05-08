import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "./LogIn.css";

//The Log In screen where the user will input their name
class LogIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            room: ""
        }
    }

    //Sets the username
    setUsername = (newUsername) => {
        this.setState({username: newUsername});
    }

    //Sets the room that the username wants to join in
    setRoom = (newRoom) => {
        this.setState({room: newRoom});
    }

    //Get the username submitted by the user
    getUserName = (event) => {
        this.setUsername(event.target.value);
    }

    //Get the room name submitted by the user
    getRoomName = (event) => {
        this.setRoom(event.target.value);
    }

    //If the user tries to log in without a username or room specified
    isEmpty = (event) => {
        if (!this.state.username || !this.state.room){
            event.preventDefault();
        }else{
            console.log(this.state.username);
            console.log(this.state.room);
        }
    }

    render(){
        return(
            <div className="logInContainer">
                <div>
                    <h1 className="heading">Enter a username</h1>
                    <div>
                        <input 
                            placeholder="Enter username..." 
                            className="userNameTextBox" 
                            type="text" 
                            onChange={this.getUserName} 
                        />
                        <input 
                            placeholder="Enter room name..." 
                            className="roomNameTextBox" 
                            type="text" 
                            onChange={this.getRoomName} 
                        />
                    </div>
                    {/** Link component will allow the 'submit' button to redirec the user to the /chat router */}    
                    <Link 
                        onClick={this.isEmpty} 
                        to={`/chat?username=${this.state.username}&room=${this.state.room}`}
                    >
                        <button className="logInButton" type="submit">Log In</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default LogIn;
