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
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <header className="App-header container">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="brand container">
            <h1 className="App-title">John Bull ~ Software Engineer</h1>
            <h3 className="App-title">Available for Hire</h3>
          </div>
         
          <div className="links">
            <Link to="/" component={Landing}>Home</Link>
            <Link to="/about" component={About}>About</Link> 
            <Link to="/Projects" component={ProjectsList}>Projects</Link>
          </div>   
        </header>
        <Switch>
          <Route exact path="http://jbull.co/" component={Landing} />
          <Route path="http://jbull.co/Projects" component={ProjectsList} />
          <Route path="http://jbull.co/about" component={About} />
        </Switch>
          
        </div>
      </Router>
      
    );
  }
}

export default App;

