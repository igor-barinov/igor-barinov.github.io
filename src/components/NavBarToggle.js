import React, { Component } from 'react';
import NavBar from './NavBar';

class NavBarToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggled: false};
    }

    onClick = () => {
        this.setState(state => ({
            isToggled: !state.isToggled
        }))
    }

    render() {
        return <button onClick={this.onClick}>
            {this.state.isToggled ? 'ON' : 'OFF'}
        </button>
    }
}

export default NavBarToggle;