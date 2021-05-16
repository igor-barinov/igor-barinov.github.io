import React, { Component } from 'react';
import '../styles/NavBar.css'

import NavBarTitle from './NavBarTitle';
import NavBarLink from './NavBarLink';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const aboutIsActive = (this.props.at === "/about");
        const portfolioIsActive = (this.props.at === "/portfolio");
        const resumeIsActive = (this.props.at === "/resume");
        

        return <ul className="NavBar">
            <NavBarTitle text="Igor Barinov" />
            <NavBarLink isActive = {aboutIsActive} link="/about" text="About" />
            <NavBarLink isActive = {portfolioIsActive} link="/portfolio" text="Portfolio" />
            <NavBarLink isActive = {resumeIsActive} link="/resume" text="Resume" />
        </ul>
    }
}

export default NavBar;