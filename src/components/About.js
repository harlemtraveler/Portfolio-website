import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Nav from './partials/nav';
import PageTemplate from './partials/PageTemplate';

class About extends Component {
  render() {
    return(
      <div className="main">
        <PageTemplate>
          <div className="about-grid">
            <figure className="about-figure">
              <div className="avatar-container about-avatar-container"></div>
              <figcaption>
                <h2>Who am I</h2>
                <p>Mandaremus dolor multos aut quis, quis se ullamco ut elit. Eu doctrina
                  efflorescere. Admodum eu quem laborum, id nulla labore ubi cupidatat, eram
                  laboris ea fugiat anim o ut fugiat voluptatibus.</p>
              </figcaption>
            </figure>
          </div>
        </PageTemplate>
      </div>
    );
  }
}

export default About;
