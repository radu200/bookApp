import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Books from '../containers/Books';


const Routes = () => (
    <BrowserRouter>
        <Route exact path='/' component={Books} />
    </BrowserRouter>
);

export default Routes;