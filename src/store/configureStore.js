import { applyMiddleware, compose, createStore } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';

import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

// middleware always needed
const middleware = [ promiseMiddleware(), thunk, routerMiddleware( browserHistory ) ];
if ( process.env.NODE_ENV !== 'production' ) {
    // middleware just for developement
    const { logger } = require( 'redux-logger' );
    middleware.push( logger );
}

let configuredCompose = compose;
if ( process.env.NODE_ENV !== 'production' ) {
    configuredCompose = composeWithDevTools;
}

export default ( initialState = {} ) => {
    const store = createStore(
        rootReducer,
        initialState,
        configuredCompose(
            applyMiddleware( ...middleware ),
            autoRehydrate()
        )
    );

    persistStore( store, { blacklist: [ 'routing' ] } );

    return store;
};
