import React from "react"
import MessagesBox from "./MessagesBox"
import UsersBox from "./UserBox"
import TextBox from "./TextBox"

function ChatBox(){
    return (
        <div>
            <MessagesBox />
            <UsersBox />
            <TextBox />
        </div>
    );
}

//Exporting the function
export default ChatBox;