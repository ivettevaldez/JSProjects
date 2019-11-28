import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ivette', age: 14 },
      { name: 'Robert', age: 25 },
      { name: 'Sylvia', age: 32 },
    ],
    otherState: 'Some other value'
  };

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = "Silvia Ivette";
    this.setState({
        persons: [
          { name: 'Silvia Ivette', age: 14 },
          { name: 'Robert', age: 25 },
          { name: 'Sylvia', age: 32 },
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobbies: TV</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
