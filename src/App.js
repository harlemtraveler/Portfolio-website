import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Nav from './components/partials/nav';
import Footer from './components/partials/Footer';
import Projects from './components/Projects';
import Home from './components/Home';
import Whoops404 from './components/Whoops404';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import AppPageTemplate from './components/partials/AppPageTemplate';


class App extends Component {
  render() {
    return (
        <Router className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/about" component={About} />
              <Route path="/clients" component={Clients} />
              <Route path="/contact" component={Contact} />
              <Route path="/app" component={AppPageTemplate} />
              <Route path="/reactfilm" component={() => window.location = 'https://react-film-keaveny.surge.sh/'} />
              <Route path="/github" component={() => window.location = 'https://github.com/harlemtraveler?tab=repositories'} />
              <Route component={Whoops404} />
            </Switch>
        </Router>
    );
  }
}

export default App
// https://react-film-keaveny.surge.sh/
