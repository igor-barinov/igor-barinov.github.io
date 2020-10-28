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
      <NavBar/>
      <div>
        <h1>
          ABOUT
        </h1>
        <p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium lacus et sapien maximus semper. Curabitur nec massa dignissim, porttitor libero at, consectetur justo. Cras quis nisl non lacus facilisis dapibus. Mauris tristique nibh nec gravida sollicitudin. Pellentesque a est libero. Vivamus commodo tincidunt facilisis. Donec suscipit sem neque, vel hendrerit sapien iaculis ut.

Vestibulum id convallis dui. Morbi lobortis, massa a pharetra maximus, ante libero aliquam nulla, et interdum erat sem ut felis. Aenean luctus suscipit orci a pharetra. Aenean id dolor sit amet dolor efficitur dapibus. In massa quam, vulputate eget nisl et, pulvinar interdum nisi. Nunc cursus pretium augue quis vehicula. Quisque vel nunc eros. Nunc placerat arcu vitae mi tincidunt suscipit. Duis eget eros ut risus rutrum ultrices a at tortor. Nullam sed hendrerit justo. Donec nunc enim, volutpat vitae risus ac, pellentesque suscipit massa.

Sed rhoncus tincidunt iaculis. Etiam urna sem, sollicitudin id velit eget, varius mattis neque. Aliquam rhoncus mi sed auctor pellentesque. Quisque dictum molestie turpis a lacinia. Pellentesque elit quam, ornare quis placerat et, molestie eget odio. Pellentesque ornare risus quis diam hendrerit, et ultricies tortor condimentum. Suspendisse eros quam, elementum non cursus sed, sagittis vitae nisl. Nunc eget libero scelerisque, tempor odio at, venenatis magna. Suspendisse congue fermentum sem, eu egestas odio placerat eu. Praesent semper egestas elit, vel accumsan felis facilisis semper. Curabitur commodo vulputate vulputate. Phasellus fringilla mollis lacus, molestie varius tellus aliquam ac. Proin gravida arcu sem, sed lobortis tellus tempus quis. Donec lobortis ipsum sit amet tortor interdum, sed dignissim augue elementum. Duis dignissim odio lobortis lectus aliquet, et sollicitudin ligula ultrices.

Praesent sed erat sem. Proin facilisis arcu et posuere sodales. Nam tempus sed neque sit amet molestie. Vestibulum blandit venenatis suscipit. Sed nisi odio, tincidunt vitae lacinia feugiat, sodales at tellus. Nam condimentum tellus eu felis pretium imperdiet. Curabitur finibus metus sed ex tempor tristique. Donec in metus sed nisi ornare dignissim. Sed ullamcorper elit nec lorem laoreet, id venenatis lacus rhoncus. Phasellus eget arcu sit amet lorem commodo porttitor. Nullam quis vestibulum ipsum. Morbi vulputate, enim cursus faucibus sagittis, libero dolor mattis lacus, sed sollicitudin nulla elit at nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
Phasellus id nibh accumsan, ultricies metus nec, consequat augue. Fusce fermentum bibendum urna, consequat euismod elit luctus eu. Proin volutpat ultricies massa. Curabitur turpis nisi, iaculis ut malesuada non, vehicula at nulla. Suspendisse potenti. Etiam scelerisque non mi at ultricies. Duis posuere non risus a varius. Integer nec purus tristique nulla consequat venenatis. Sed quis erat metus. Etiam velit leo, rutrum in accumsan eget, aliquet id enim. 
        </p>
      </div>
    </div>
  }
}

export default App;
