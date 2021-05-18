import React, { Component } from 'react';

import '../styles/ProjectDescription.css';

class ProjectDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className = "ProjectDescription">
                <h5>{"Written in: " + this.props.languages}</h5>
                <h5>Goal</h5>
                <p>{this.props.goal}</p>
                <h5>Implemented Features</h5>
                <p>{this.props.features}</p>
                <h5>Future Work</h5>
                <p>{this.props.future}</p>
            </div>
        );
    }
}

export default ProjectDescription;