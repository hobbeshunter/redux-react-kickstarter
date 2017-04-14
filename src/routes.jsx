import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import NewestNumbers from './containers/NewestNumbers';
import Test from './components/Test';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={NewestNumbers}/>
        <Route path="test" component={Test} />
    </Route>
);

export default routes;
