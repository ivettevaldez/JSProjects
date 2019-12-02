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
    otherState: 'Some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
        persons: [
          { name: newName, age: 14 },
          { name: 'Robert', age: 25 },
          { name: 'Sylvia Catalina', age: 32 },
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Ivette', age: 14 },
        { name: event.target.value, age: 25 },
        { name: 'Sylvia', age: 32 },
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={buttonStyle}
          onClick={this.togglePersonsHandler}>
            Toggle Persons
        </button>

        { 
          this.state.showPersons ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, "Ivette!")}
                changed={this.nameChangedHandler} >My hobbies: TV</Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
            </div> : null
        }
      </div>
    );
  }
}

export default App;
