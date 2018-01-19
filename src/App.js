import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ProjectsList from './components/ProjectsList';
import styled from 'styled-components';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <header className="App-header container">
          <div className="brand container">
            <h1 className="App-title">John Bull ~ Software Engineer</h1>
            <h3 className="App-title">Available for Hire</h3>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/about" component={About}>About</Link> 
          <Link to="/Projects" component={ProjectsList}>Projects</Link> 
        </header>
        <Switch>
          <Route path="/Projects" component={ProjectsList} />
          <Route path="/about" component={About} />
        </Switch>
          
        </div>
      </Router>
      
    );
  }
}

export default App;

