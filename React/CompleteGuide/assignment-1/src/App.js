import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { userName: 'Ivette' },
      { userName: 'Robert' },
      { userName: 'Sylvia' },
    ]
  };

  userNameChangedHandler = (event) => {
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
        <UserInput 
          changed={this.userNameChangedHandler}
          currentName={this.state.users[0].userName} />

        <UserOutput userName={this.state.users[0].userName} >
          Read books
        </UserOutput>
        <UserOutput userName={this.state.users[1].userName} >
            Watch TV
        </UserOutput>
        <UserOutput userName={this.state.users[2].userName} >
            Listen to music
        </UserOutput>
      </div>
    );
  }
}

export default App;
