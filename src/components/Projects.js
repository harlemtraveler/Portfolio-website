import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Nav from './partials/nav';
import PageTemplate from './partials/PageTemplate';

class Projects extends Component {
  render() {
    return(
      <div className="main">
        <PageTemplate>
        <div className="main-container grid">

          <NavLink to="/reactfilm">
            <div className="square square1">
              <h3 className="square-text">Laptop</h3>
            </div>
          </NavLink>

          <NavLink to="/github">
            <div className="square square2">
              <h3 className="square-text">Cloud</h3>
            </div>
          </NavLink>

          <NavLink to="/github">
            <div className="square square3">
              <h3 className="square-text">Router</h3>
            </div>
          </NavLink>

          <NavLink to="/github">
            <div className="square square4">
              <h3 className="square-text">Peripherals</h3>
            </div>
          </NavLink>

          <NavLink to="/github">
            <div className="square square5">
              <h3 className="square-text">Desktop</h3>
            </div>
          </NavLink>

          <NavLink to="/github">
            <div className="square square6">
              <h3 className="square-text">Server</h3>
            </div>
          </NavLink>

          <ul className="project-list">
            <li src="project-item pi1"><a src="https://react-film-keaveny.surge.sh/">React Film</a></li>
            <li src="project-item pi2"><a src="https://moviebase-python-rails-project.herokuapp.com/">MovieBase</a></li>
            <li src="project-item pi3"><a src="https://ruby-on-rails-crud-blog.herokuapp.com/">Ruby on Rails Blog</a></li>
          </ul>
        </div>
        </PageTemplate>
      </div>
    );
  }
}

export default Projects
