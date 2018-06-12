import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import PageTemplate from './partials/PageTemplate';

class Contact extends Component {
  render() {
    return(
      <div className="main">
        <PageTemplate>
          <div className="contact-grid">
            <figure className="contact-figure">
              <div className="avatar-container contact-avatar-container"></div>
              <figcaption>
                <h2>How to reach us:</h2>
                <p>
                  <a href="https://www.linkedin.com/in/timothykeaveny" alt="linkedin link">LinkedIn</a>
                </p>
              </figcaption>
            </figure>
          </div>
        </PageTemplate>
      </div>
    );
  }
}

export default Contact;
