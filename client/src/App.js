import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { isAuthenticated } from './helper/'

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';



const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={(props) => (isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <AuthenticatedRoute path="/profile/:userId" component={Profile} />
    </Switch>
  </Router>
)
export default App;
