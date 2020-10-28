import React, { Component } from 'react'
import '../styles/NavBarLink.css'

class NavBarLink extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const linkCls = (this.props.isActive) ? "active" : "inactive"
        return <li class="NavBarLink">
            <a class = {linkCls} href={this.props.link}>{this.props.text}</a>
        </li>
    }
}

export default NavBarLink;