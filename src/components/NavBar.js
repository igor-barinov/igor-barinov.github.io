import React, { Component } from 'react';
import '../styles/NavBar.css'

import NavBarTitle from './NavBarTitle';
import NavBarLink from './NavBarLink';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLinkIndex: 0
        };
    }

    render() {
        return <ul className="NavBar">
            <NavBarTitle text="Igor Barinov" />
            <NavBarLink isActive = {true} link="#" text="About" />
            <NavBarLink isActive = {false} link="#" text="Portfolio" />
            <NavBarLink isActive = {false} link="#" text="Resume" />
        </ul>
    }
}

export default NavBar;