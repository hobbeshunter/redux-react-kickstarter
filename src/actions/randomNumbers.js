import * as schema from './schema';

import { ADD_RANDOM_NUMBERS } from './types';
import ConfiguredAxios from 'ConfiguredAxios';
import { normalize } from 'normalizr';

export function addRandomNumbers( data ) {
    return {
        type: ADD_RANDOM_NUMBERS,
        payload: normalize( data, schema.arrayOfNumbers )
    };
}

export function fetchRandomNumbers() {
    return dispatch => {
        return dispatch( {
            type: 'FETCH_DATA',
            payload: {
                promise: ConfiguredAxios.get( '/1d/' )
            }
        } ).then( ( { action } ) => {
            dispatch( addRandomNumbers( action.payload.data ) );
        } ).catch( ( error ) => {
            // eslint-disable-next-line no-console
            console.log( error );
        } );
    };
}
