import React, { Component } from 'react';

import '../styles/Page.css';

import NavBar from '../components/NavBar';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Portfolio">
        <NavBar at="/portfolio"/>
        <div>
          <h1>
            PORTFOLIO
          </h1>
          <p>
            am broke
          </p>
        </div>
      </div>
    );
  }
}

export default Portfolio;
