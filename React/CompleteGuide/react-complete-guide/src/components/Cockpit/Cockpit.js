import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let buttonClasses = '';

    if(props.showPeople) {
        buttonClasses = classes.Red;
    }

    if (props.people.length <= 2) {
      assignedClasses.push(classes.red); // assignedClasses = ['red']
    }
    if (props.people.length <= 1) {
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className={buttonClasses}
                onClick={props.clicked}
                show={props.showPeople} >
                Toggle People
            </button>
        </div>
    );
};

export default cockpit;
