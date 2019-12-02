import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Ivette', age: 14 },
      { name: 'Robert', age: 25 },
      { name: 'Sylvia', age: 32 },
    ],
    otherState: 'Some other value',
    showPeople: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      people: [
          { name: newName, age: 14 },
          { name: 'Robert', age: 25 },
          { name: 'Sylvia Catalina', age: 32 },
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      people: [
        { name: 'Ivette', age: 14 },
        { name: event.target.value, age: 25 },
        { name: 'Sylvia', age: 32 },
      ]
    });
  };

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({
      showPeople: !doesShow
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

    let people = null;

    if ( this.state.showPeople ) {
      people = (
        <div>
          {this.state.people.map(person => {
            return <Person 
              name={person.name} 
              age={person.age} />
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={buttonStyle}
          onClick={this.togglePeopleHandler}>
            Toggle People
        </button>
        
        { people }
      </div>
    );
  }
}

export default App;
