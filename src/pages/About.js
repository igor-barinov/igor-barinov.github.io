import React, { Component } from 'react';

import '../styles/Page.css';

import NavBar from '../components/NavBar';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="About">
        <NavBar at="/about"/>
        <div>
          <h1>
            ABOUT
          </h1>
          <p>
            hewwo
          </p>
        </div>
      </div>
    );
  }
}

export default About;
