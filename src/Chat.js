import React from "react";
import { Component } from "react";

import "./Chat.css";

class Chat extends Component {
  constructor() {
    super();

    // Set initial state
    this.state = {message: null};
    // Binding this keyword
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Changing state
    this.setState({message:"Have e a good day!"});
  }

  render() {
    return (
      <div className="mt-20 mb-auto">
        <div className="flex items-center space-x-2 p-6 chatwidth mx-auto bg-white rounded-xl shadow-md">
          <div className="flex-shrink-0">
            <img className="chatlogo" src="./chat.png" alt="chat logo" />
          </div>
          <div>
            <div className="chatmaintext ">Let's Chat</div>
            <p className="chatstatetext">{this.state.message}</p>
          </div>
        </div>
        {/* Set click handler */}
        <button
          onClick={() => {
            this.handleClick();
          }}
          className="chatbutton"
        >
          click me to see message
        </button>
      </div>
    );
  }
}

export default Chat;
