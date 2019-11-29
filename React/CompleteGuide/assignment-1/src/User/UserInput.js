import React from 'react';

const userInput = ( props ) => {
    const inputStyle = {
      backgroundColor: '#eee',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      textAlign: 'center'
    };

    return (
        <div>
            <input
                type="text"
                style={inputStyle}
                onChange={props.changed}
                value={props.userName} />
        </div>
    );
};

export default userInput;
