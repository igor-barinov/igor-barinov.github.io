import React, { Component } from 'react';

import '../styles/Page.css';

import NavBar from '../components/NavBar';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Resume">
        <NavBar at="/resume"/>
        <div>
          <h1>
            RESUME
          </h1>
          <p>
            can cook minute rice in 59 sec
          </p>
        </div>
      </div>
    );
  }
}

export default Resume;
