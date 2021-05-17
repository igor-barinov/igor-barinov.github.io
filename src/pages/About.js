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
      <div className="Page">
        <NavBar at="/about"/>
        <div>
          <h1>
            ABOUT
          </h1>
          <h3>
            Personal
          </h3>
          <p>
            My name is Igor Barinov. I am currently pursuing a dual-major in Computer Science and Economics at Rensselaer Polytechnic Institute.
            Employment-wise, I work at Brandeis University as a research technician where I write data analysis scripts in MATLAB.
            Outside of work, I work on projects written in Rust, C++, Javascript, and more, where I tend to focus on backend work.
          </p>
          <h3>
            Contact Information
          </h3>
          <h5>
            Email: igorb202@gmail.com
          </h5>
          <h5>
            GitHub: github.com/igor-barinov
          </h5>
          <h5>
            LinkedIn: linkedin.com/in/igor-barinov/
          </h5>
        </div>
      </div>
    );
  }
}

export default About;
