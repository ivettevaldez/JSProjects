import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] 1st useEffect');
        // HTTP request or something...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);

        return () => {
            console.log('[Cockpit.js] Cleanup work in 1st useEffect')
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] Cleanup work in 2nd useEffect')
        };
    });

    const assignedClasses = [];
    let buttonClasses = '';

    if(props.showPeople) {
        buttonClasses = classes.Red;
    }

    if (props.peopleLength <= 2) {
      assignedClasses.push(classes.red); // assignedClasses = ['red']
    }
    if (props.peopleLength <= 1) {
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

export default React.memo(cockpit);
