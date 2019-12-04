import React, {Component} from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { id: 'xxxx', name: 'Ivette', age: 14 },
      { id: 'yyyy', name: 'Robert', age: 25 },
      { id: 'zzzz', name: 'Sylvia', age: 32 },
    ],
    otherState: 'Some other value',
    showPeople: false
  };

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });

    const person = { 
      ...this.state.people[personIndex] 
    };

    // const person = Object.assign({}, this.state.people[personIndex]);

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({
      people: people
    });
  };

  deletePersonHandler = (personIndex) => {
    // const people = this.state.people.slice();
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({
      people: people
    });
  };
 
  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({
      showPeople: !doesShow
    });
  };

  render() {
    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return <Person 
              key={person.id}
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div> 
      );
    }

    const classes = [];
    if (this.state.people.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.people.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          className="button"
          onClick={this.togglePeopleHandler}
          show={this.state.showPeople} >
            Toggle People
        </button>
        
        { people }
      </div>
    );
  }
}

export default App;
