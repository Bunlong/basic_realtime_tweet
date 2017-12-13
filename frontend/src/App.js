import React, { Component } from 'react';

import TweetForm from './TweetForm';
import io from "socket.io-client";
let socket = io(`http://192.168.88.246:8000`)

class App extends Component {
  state = {
    text: ""
  }

  submit = values => {
    socket.emit('tweet',values.text);
  }

  componentDidMount() {    
    socket.on('refresh_tweet', text => {
      this.setState({ text })
    })
  }
  
  render() {
    return (
      <div>
        { this.state.text }
        <TweetForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default App;
