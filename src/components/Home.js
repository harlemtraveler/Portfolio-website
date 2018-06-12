import React, { Component } from 'react';
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
        <button className="home-button-center left-button">Explore</button>
        <button className="home-button-center right-button">Contact</button>
    </div>
    );
  }
}

export default Home;
