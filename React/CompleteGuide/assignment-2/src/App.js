import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputValue: ''
  };

  inputChangedHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  };

  deleteCharHandler = (index) => {
    const text = this.state.inputValue.split('');
    text.splice(index, 1);
    const updatedText = text.join('');

    this.setState({
      inputValue: updatedText
    });
  };

  render() {
    const charList = this.state.inputValue.split('').map((char, index) => {
      return <Char 
        key={index}
        value={char}
        click={() => this.deleteCharHandler(index)} />
    });

    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <input 
          type="text"
          value={this.state.inputValue}
          onChange={this.inputChangedHandler} />
        <p>Input text has {this.state.inputValue.length} characters</p>
        <Validation inputLength={this.state.inputValue.length} />
        {charList}
      </div>
    );
  }
}

export default App;
