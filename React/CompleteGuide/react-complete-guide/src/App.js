import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Ivette', age: 14 },
      { name: 'Robert', age: 25 },
      { name: 'Sylvia', age: 32 },
    ],
    otherState: 'Some other value'
  });

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = "Silvia Ivette";
    setPersonsState({
        persons: [
          { name: 'Silvia Ivette', age: 14 },
          { name: 'Robert', age: 25 },
          { name: 'Sylvia', age: 32 },
      ]
    });
  };
  
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>

      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My hobbies: TV</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;
