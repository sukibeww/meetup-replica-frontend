import React from 'react';
import Navbar from './components/navbar/Navbar'
import RegistrationForm from './components/register/RegisterationForm';
import Login from './components/login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch >
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={RegistrationForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
