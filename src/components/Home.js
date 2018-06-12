import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Nav from './partials/nav';
import Footer from './partials/Footer';
import Projects from './Projects';

class Home extends Component {
  render() {
    return(
      <div className="home-container">
        <header>
          <Nav />
        </header>
        <div className="home-grid">
            {/* <button className="home-button-center left-button">Explore</button>
            <button className="home-button-center right-button">Contact</button> */}
        </div>
        <NavLink className="left-button" to="/projects">
          <button className="home-button-center left-button">Explore</button>
        </NavLink>
        <NavLink className="right-button" to="/contact">
          <button className="home-button-center right-button">Contact</button>
        </NavLink>
    </div>
    );
  }
}

export default Home;
