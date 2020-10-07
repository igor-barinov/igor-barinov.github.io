import React, { Component } from 'react';
import '../styles/NavBar.css'

class NavBar extends Component {
    render() {
        return <ul className="NavBar">
            <li><a href="/">Home</a></li>
            <li><a href="https://www.google.com">Google</a></li>
        </ul>
    }
}

export default NavBar;