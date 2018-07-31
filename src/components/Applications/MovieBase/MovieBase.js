import React, { Component } from 'react';
import PageTemplate from './partials/PageTemplate';

class MovieBase extends Component {
  render() {
    return(
      <div className="main">
        <PageTemplate>
          <div className="MovieBase-grid">
            <figure className="MovieBase-figure">
              <div className="avatar-container MovieBase-avatar-container"></div>
              <figcaption>
                <h2>Movie Base</h2>
                <p>
                    Movie Base is an film trailer archive that provides a space
                    to find all the past movies that have made us smile, laugh,
                    cry, etc.
                </p>
                <p>
                  <a href="https://moviebase-python-rails-project.herokuapp.com/" alt="MovieBase link">Github</a>
                </p>
              </figcaption>
            </figure>
          </div>
        </PageTemplate>
      </div>
    );
  }
}

export default MovieBase;
