import React, { Component } from 'react';
import Nav from './nav';
import ComputerIcon from '../../img/computer.png';

const PageTemplate = ({ children }) =>
  <div className="page">
    <Nav />
    {children}
  </div>

export const Home = () =>
  <PageTemplate>
    <section>
      <img
        src={ComputerIcon}
        className="computer-icon"
      />
    </section>
  </PageTemplate>

export const Projects = () =>
  <PageTemplate>
    <section>
      <h1>Projects</h1>
    </section>
  </PageTemplate>

export const Clients = () =>
  <PageTemplate>
    <section>
      <h1>Clients</h1>
    </section>
  </PageTemplate>

export const About = () =>
  <PageTemplate>
    <section>
      <h1>About</h1>
    </section>
  </PageTemplate>

export const Contact = () =>
  <PageTemplate>
    <section>
      <h1>Contact</h1>
    </section>
  </PageTemplate>

export default PageTemplate;
