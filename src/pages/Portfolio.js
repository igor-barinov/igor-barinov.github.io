import React, { Component } from 'react';

import '../styles/Page.css';

import NavBar from '../components/NavBar';
import Project from '../components/Project';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Page">
        <NavBar at="/portfolio"/>
        <div>
          <h1>
            PORTFOLIO
          </h1>
          <h2>
            Projects
          </h2>
          <Project title="Machine Learning in C++" />
          <Project title="'dscript' Programming Language"/>
          <Project title="HTTP Client/Server in C" />
          <Project title="Console Ray Tracing in Rust" />
          <Project title="Algorithms in Rust" />
          <Project title="Discord Bot in Javascript" />
          <Project title="GroupMe Bot in Javascript"/>
        </div>
      </div>
    );
  }
}

export default Portfolio;
