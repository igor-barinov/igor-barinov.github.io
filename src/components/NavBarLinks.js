import React, { Component } from 'react';
import '../styles/NavBarLinks.css'

class NavBarLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const isHidden = this.props.hidden;
        return <div className="NavBarLinks">
            {isHidden && (
            <div>
            <li><a href="/">Home</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Resume</a></li>
            </div>
            )}
        </div>
    }
}

export default NavBarLinks;