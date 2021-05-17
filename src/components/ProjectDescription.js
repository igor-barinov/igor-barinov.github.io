import React, { Component } from 'react';

import '../styles/ProjectDescription.css';

class ProjectDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const cls = (this.props.isShown) ? "ProjectDescription" : "ProjectBlank";

        return (
            <div className = {cls}>
                <h5>{"Written in: " + this.props.languages}</h5>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default ProjectDescription;