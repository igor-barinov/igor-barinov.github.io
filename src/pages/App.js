import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/Page.css';

import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/portfolio"><Portfolio /></Route>
          <Route path="/resume"><Resume /></Route>
          <Route path="/"><About /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
