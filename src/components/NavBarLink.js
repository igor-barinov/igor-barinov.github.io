import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styles/NavBarLink.css'

class NavBarLink extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const linkCls = (this.props.isActive) ? "ActiveNavBarLink" : "NavBarLink"
        return <li class={linkCls}>
            <Link to={this.props.link}>{this.props.text}</Link>
        </li>
    }
}

export default NavBarLink;