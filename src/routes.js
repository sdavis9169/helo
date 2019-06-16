import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Nav from './Components/Nav/Nav';
import Post from './Components/Post/Post';

export default(
    <Switch>
        <Route component={Auth} exact path='/' />
        <Route component={Dashboard} path='/dashboard' />
        <Route component={Form} path='/form' />
        <Route component={Post} path='/post' />
    </Switch>
)