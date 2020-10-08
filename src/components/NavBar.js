import React, { Component } from 'react';
import '../styles/NavBar.css'

import NavBarToggle from './NavBarToggle';
import NavBarLinks from './NavBarLinks';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLinks: false
        };
    }

    onNavBarToggleClick = () => {
        this.setState({
            showLinks: !this.state.showLinks
        });
    }

    render() {
        const showLinks = this.state.showLinks;

        if (showLinks) {
            return <ul className="NavBar">
                <li><p>Igor Barinov</p></li>
                <li><NavBarToggle onClick={this.onNavBarToggleClick}></NavBarToggle></li>
                <NavBarLinks></NavBarLinks>
            </ul>
        } else {
            return <ul className="NavBar">
                <li><p>Igor Barinov</p></li>
                <li><NavBarToggle onClick = {this.onNavBarToggleClick}></NavBarToggle></li>
            </ul>
        }
    }
}

export default NavBar;