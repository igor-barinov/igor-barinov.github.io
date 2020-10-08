import React, { Component } from 'react';
import '../styles/NavBarToggle.css'

class NavBarToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggled: false};
    }

    onClick = () => {
        this.props.onClick();
        this.setState({
            isToggled: !this.state.isToggled
        });
    }

    render() {
        return <button className="NavBarToggle" onClick={this.onClick}>
            {this.state.isToggled ? 'ON' : 'OFF'}
        </button>
    }
}

export default NavBarToggle;