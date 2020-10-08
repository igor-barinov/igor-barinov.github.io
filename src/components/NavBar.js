import React, { Component } from 'react';
import '../styles/NavBar.css'

import NavBarToggle from './NavBarToggle';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <ul className="NavBar">
            <li><p>Igor Barinov</p></li>
            <li><NavBarToggle></NavBarToggle></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Resume</a></li>
        </ul>
    }
}

export default NavBar;