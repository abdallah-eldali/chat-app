import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBox from './chat/ChatBox/ChatBox.js';
import LogIn from './chat/LogIn/LogIn.js';

//Reacting Routing handler
import {BrowserRouter as Router, Route} from 'react-router-dom';

import io from 'socket.io-client';
//The URL where the socket will be connect 
//with the back-end
const socketUrl = "http://localhost:3001"

class App extends Component {
  constructor(props){
    super(props);

    //Keeps track of the state of the user
    //ie: important information about the user
    this.state = {
      userSocket: null
    };
  }

  initSocket(){
    const socket = io(socketUrl);

    //When the socket connects with the server
    socket.on("connect", (socket) => {
      console.log("Connected to the server succesfully");
    });

    //Set the state with the socket
    //i.e.: save the socket
    this.setState({userSocket: socket});
  }

  //Function called after the mounting
  //i.e.: after ReactJS adds nodes to the DOM tree
  componentDidMount(){
    //this.initSocket();
  }

  render(){
    //Where the components will go
    return(
      <Router>
        <Route path="/" exact component={LogIn} />
        <Route path="/chat" exact component={ChatBox} />
      </Router>
    );
  }
};

export default App;
