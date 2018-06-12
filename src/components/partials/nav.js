import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Logo from '../../img/logo-primary.gif';

class Nav extends Component {
  render() {
    return(
      <div className="container">
        <nav className="nav-container">
          <ul className="top-nav-ul">
            <li className="flex-item flex-item1">
              <NavLink to="/">
                <img src={Logo} className="logo-icon" alt="logo" />
              </NavLink>
            </li>
            <li className="flex-item">
              <NavLink to="./projects">
                Projects
              </NavLink>
            </li>
            <li className="flex-item">
              <NavLink to="./clients">
                Clients
              </NavLink>
            </li>
            <li className="flex-item">
              <NavLink to="./about">
                About
              </NavLink>
            </li>
            <li className="flex-item">
              <NavLink to="./contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-title-name-container">
            <h2 className="nav-name">Timothy Keaveny</h2>
            <h4 className="nav-role">Software Engineer</h4>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
