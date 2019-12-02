import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputValue: [],
    inputLength: 0
  };

  inputChangedHandler = ( event ) => {
    this.setState({
      inputValue: event.target.value.split(''),
      inputLength: event.target.value.length
    });
  };

  deleteCharHandler = ( charIndex ) => {
    const chars = [...this.state.inputValue];
    chars.splice(charIndex, 1);
    this.setState({
      inputValue: chars,
      inputLength: chars.length
    });
  };

  render() {
    let chars = (
      <div>
        {this.state.inputValue.map((char, index) => {
          return <Char 
            key={index}
            value={char}
            click={() => this.deleteCharHandler(index)} />
        })}
      </div> 
    );

    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <input 
          type="text"
          value={this.state.inputValue.join('')}
          onChange={(event) => this.inputChangedHandler(event)} />
        <p>
          Input text has {this.state.inputLength} characters
        </p>
        <Validation 
          inputLength={this.state.inputLength} />
        {chars}
      </div>
    );
  }
}

export default App;
