import React, { Component } from 'react';
import UserOutput from './User/UserOutput';
import './App.css';

class App extends Component {
  state = {
    users: [
      { userName: 'Ivette' },
      { userName: 'Robert' },
      { userName: 'Sylvia' },
    ]
  };

  nameChangedHandler = (event) => {
    this.setState({
      users: [
        { userName: event.target.value },
        { userName: 'Roberto' },
        { userName: 'Silvia Catalina' },
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <UserOutput 
          userName={this.state.users[0].userName}
          changed={this.nameChangedHandler}>
          Read books
        </UserOutput>
        <UserOutput 
          userName={this.state.users[1].userName}>
            Watch TV
        </UserOutput>
        <UserOutput 
          userName={this.state.users[2].userName}>
            Read the Bible
        </UserOutput>
      </div>
    );
  }
}

export default App;
