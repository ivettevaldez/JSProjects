import React, {Component} from 'react';

import classes from './App.css';

import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

import Cockpit from '../components/Cockpit/Cockpit';
import People from '../components/People/People';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    people: [
      { id: 'xxxx', name: 'Ivette', age: 14 },
      { id: 'yyyy', name: 'Robert', age: 25 },
      { id: 'zzzz', name: 'Sylvia', age: 32 },
    ],
    otherState: 'Some other value',
    showPeople: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // };

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

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

    this.setState((prevState, props) => {
      return {
        people: people,
        changeCounter: this.state.changeCounter + 1
      };
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

  loginHandler = () => {
    this.setState({
      authenticated: true
    });
  };

  render() {
    console.log('[App.js] render');
    let people = null;

    if (this.state.showPeople) {
      people = ( 
        <People 
          people={this.state.people} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated} />
      );
    }
    
    return (
      <Aux>
        <button onClick={() => {this.setState({showCockpit: false})}}>
          Remove Cockpit
        </button>

        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }} 
        >
          {this.state.showCockpit ?
            <Cockpit 
              title={this.props.appTitle}
              showPeople={this.state.showPeople}
              peopleLength={this.state.people.length}
              clicked={this.togglePeopleHandler} />
              : null 
          }
            
          { people }
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
