import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const results = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat(
                    {id: new Date(), value: action.result}
                )
            }
        case actionTypes.DELETE_RESULT:
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

export default results;