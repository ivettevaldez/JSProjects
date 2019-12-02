import React from 'react';

import './UserOutput.css';

const userOutput = ( props ) => {
    return (
        <div className="UserOutput">
            <p>Hello, I'm {props.userName}</p>
            <p>and I like to {props.children}</p>
        </div>
    );
};

export default userOutput;
