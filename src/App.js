import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

//components
import Navbar from './components/navbar/Navbar'
import RegistrationForm from './components/register/RegisterationForm';
import ImageUploadForm from './components/image-upload-form/ImageUploadForm';
import Login from './components/login/Login'
import Home from './components/home/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={RegistrationForm} />
          <Route path="/upload" exact component={ImageUploadForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
