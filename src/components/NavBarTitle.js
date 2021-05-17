import React, { Component } from 'react'
import '../styles/NavBarTitle.css'

class NavBarTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return <li className="NavBarTitle">
            {this.props.text}
        </li>
    }
}

export default NavBarTitle;