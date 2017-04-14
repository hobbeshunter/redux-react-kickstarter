import { ADD_RANDOM_NUMBERS } from '../actions/types';

const numbers = ( state = [], action ) => {
    switch ( action.type ) {
        case ADD_RANDOM_NUMBERS:
            {
                return [
                    ...state,
                    action.payload.result
                ];
            }
        default:
            {
                return state;
            }
    }
};

export default numbers;

// We also define so called "Selectors". So all logic which depends on the data structure of this part of the state is in this file.
export const getLastNumberSet = state => ( state.numbers[ state.numbers.length - 1 ] || [] );
