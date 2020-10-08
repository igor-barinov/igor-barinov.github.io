import React, { Component } from 'react';

class NavBarLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="NavBarLinks">
            <li><a href="/">Home</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Resume</a></li>
        </div>
    }
}

export default NavBarLinks;