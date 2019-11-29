import React from 'react';
import UserInput from './UserInput';
import './UserOutput.css';

const userOutput = ( props ) => {
    return (
        <div className="UserOutput">
            <p>Hello, I'm {props.userName}</p>
            <p>and I like to {props.children}</p>
            <UserInput
                userName={props.userName}
                changed={props.changed} />
        </div>
    );
};

export default userOutput;
