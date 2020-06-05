import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Login from './companents/onboard/login.js';
// import Signup from './companents/onboard/signup.js';
import SignupWithHook from './companents/onboard/signupHook.js'

import Messenger from './companents/massenger/messenger.js';


function App() {
  return (
    <Router>
    
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <SignupWithHook />
        </Route>
        <Route path="/messenger">
          <Messenger />
        </Route>
      </Switch>
  </Router>

    
  );
}

export default App;
