import React, {PureComponent} from 'react';

import Person from './Person/Person';

class People extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[People.js] getDerivedStateFromProps');
  //   return state;
  // };

  // componentWillReceiveProps(props) {
  //   console.log('[Person.js] componentWillReceiveProps', props);
  // };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[People.js] shouldComponentUpdate');
  //   if (
  //     nextProps.people !== this.props.people || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[People.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};  
  }

  // componentWillUpdate() {

  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[People.js] componentDidUpdate');    
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[People.js] componentWillUnmount');
  }

  render () {
    console.log('[People.js] rendering...');

    return this.props.people.map((person, index) => {
      return <Person 
        key={person.id}
        name={person.name} 
        age={person.age}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)} />
    });
  }
}

export default People;
