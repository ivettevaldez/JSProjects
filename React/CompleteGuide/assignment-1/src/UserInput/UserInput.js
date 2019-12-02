import React from 'react';

const userInput = ( props ) => {
    const inputStyle = {
      backgroundColor: '#eee',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      textAlign: 'center',
      margin: '16px auto'
    };

    return <input
        type="text"
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName} />;
};

export default userInput;
