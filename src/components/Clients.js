import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Nav from './partials/nav';
import PageTemplate from './partials/PageTemplate';

class Clients extends Component {
  render() {
    return(
      <div className="main">
        <PageTemplate>
          <div className="clients-grid">
            <figure className="clients-figure">
              <div className="avatar-container clients-avatar-container"></div>
              <figcaption>
                <h2>Brief List of our Clients</h2>
                <p>- Myers Management and Leadership Consulting (MMLC)</p>
              </figcaption>
            </figure>
          </div>
        </PageTemplate>
      </div>
    );
  }
}

export default Clients;
