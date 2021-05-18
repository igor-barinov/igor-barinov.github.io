import React, { Component } from 'react';

import '../styles/Page.css';

import NavBar from '../components/NavBar';
import Project from '../components/Project';

const Projects = {
  ML: 0,
  DSCRIPT: 1,
  HTTP: 2,
  RAY_TRACE: 3,
  ALGO: 4,
  DISCORD: 5,
  GROUPME: 6
};

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getTitle(project) {
    switch (project) {
      case Projects.ML:
        return "Machine Learning in C++"
      case Projects.DSCRIPT:
        return "Programming Lanugage in Rust"
      case Projects.HTTP:
        return "HTTP Client/Server in C"
      case Projects.RAY_TRACE:
        return "Console Ray Tracing in Rust"
      case Projects.ALGO:
        return "Algorithms in Rust"
      case Projects.DISCORD:
        return "Discord Bot in Python"
      case Projects.GROUPME:
        return "GroupMe Bot in Node.js"
      default:
        return "N/A"
    };
  }

  getStatus(project) {
    switch (project) {
      case Projects.ML:
        return true;
      default:
        return false;
    }
  }

  getLanguages(project) {
    switch (project) {
      case Projects.ML:
        return "C++"
      case Projects.DSCRIPT:
        return "Rust"
      case Projects.HTTP:
        return "C"
      case Projects.RAY_TRACE:
        return "Rust"
      case Projects.ALGO:
        return "Rust"
      case Projects.DISCORD:
        return "Python"
      case Projects.GROUPME:
        return "JavaScript"
      default:
        return "N/A"
    };
  }

  getGoal(project) {
    switch (project) {
      case Projects.ML:
        return "A simple, lightweight machine learning library with support for models such as linear regression, logistic regression, support vector machines, and neural networks.";
      default:
        return "N/A"
    }
  }

  getFeatures(project) {
    switch (project) {
      case Projects.ML:
        return "Current work is focused on n-dimensional array structures and iterators. "
      default:
        return "N/A"
    }
  }

  getFuture(project) {
    switch (project) {
      case Projects.ML:
        return "In the near future, implementations of"
      default:
        return "N/A"
    };
  }

  getProjectElement(project) {
    let title = this.getTitle(project);
    let isWIP = this.getStatus(project);
    let lang = this.getLanguages(project);
    let goal = this.getGoal(project);
    let features = this.getFeatures(project);
    let future = this.getFuture(project);
    return <Project title={title} wip={isWIP} languages={lang} goal={goal} features={features} future={future} />;
  }

  render() {
    return (
      <div className="Page">
        <NavBar at="/portfolio"/>
        <div className="Projects">
          <h1>
            PORTFOLIO
          </h1>
          <h2>
            Projects
          </h2>
          {this.getProjectElement(Projects.ML)}
          {this.getProjectElement(Projects.DSCRIPT)}
          {this.getProjectElement(Projects.HTTP)}
          {this.getProjectElement(Projects.RAY_TRACE)}
          {this.getProjectElement(Projects.ALGO)}
          {this.getProjectElement(Projects.DISCORD)}
          {this.getProjectElement(Projects.GROUPME)}
        </div>
      </div>
    );
  }
}

export default Portfolio;
