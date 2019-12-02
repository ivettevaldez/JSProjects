import React from 'react';

const validation = ( props ) => {
    const minLength = 5;
    let result = null;

    if (props.inputLength < minLength) {
        result = "Text too short";
    } else {
        result = "Text long enough";
    }

    return <p>{ result }</p>;
};

export default validation;
