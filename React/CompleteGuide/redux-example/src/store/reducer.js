const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }            
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat(
                    {id: new Date(), value: state.counter}
                )
            }
        case 'DELETE_RESULT':
            // First way: Make a copy of the current state (results).
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.results.splice(id, 1);

            // Second way: Use filter to do a copy of the current state just with the required elements.
            const updatedArray = state.results.filter(result => result.id !== action.resultElementId);

            return {
                ...state,
                results: updatedArray
            }            
        default:
            return state;
    }
};

export default reducer;