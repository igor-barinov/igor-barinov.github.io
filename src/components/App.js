import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="App">
      <NavBar>

      </NavBar>
      <div>
        H
      </div>
    </div>
  }
}

export default App;
