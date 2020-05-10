import React, {Component} from "react";


class Message extends Component{
    render(){
        console.log(this.props.username + ": " + this.props.message);
        return(
            <div>
                <p>
                    {this.props.username + ": " + this.props.message}
                </p>
            </div>
        );
    }
}

export default Message;