import React from 'react';

const validation = (props) => {
    const minLength = 5;
    let message = "Text too short!";

    if (props.inputLength >= minLength) {
        message = "Text long enough";
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default validation;
