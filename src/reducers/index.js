import { combineReducers } from 'redux';
import numbers from './numbers';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers( {
    routing,
    numbers
} );

export default rootReducer;
