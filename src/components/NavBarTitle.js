import React, { Component } from 'react'
import '../styles/NavBarTitle.css'

class NavBarTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return <li class="NavBarTitle">
            {this.props.text}
        </li>
    }
}

export default NavBarTitle;