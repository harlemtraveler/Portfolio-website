import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import PageTemplate from './PageTemplate';

class AppPageTemplate extends Component {
  render() {
    return(
      <div className="main">
        <PageTemplate>
          <div className="<app-name>-grid">
            <figure className="<app-name>-figure">
              <div className="avatar-container <app-name>-avatar-container"></div>
              <figcaption>
                <h2>Application Title:</h2>
                <p>
                    App description here...
                </p>
                <p>
                  <a href="https://github.com/harlemtraveler?tab=repositories" alt="github link">Github</a>
                </p>
              </figcaption>
            </figure>
          </div>
        </PageTemplate>
      </div>
    );
  }
}

export default AppPageTemplate;
