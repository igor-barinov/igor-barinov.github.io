import React, { Component } from 'react';

import '../styles/Project.css';

import ProjectDescription from './ProjectDescription';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDescription: false
        };
    }

    toggleDescription = () => {
        const currentlyShowing = this.state.showDescription;
        this.setState({
            showDescription: !currentlyShowing
        });
    }

    render() {
        return (
            <div className="Project">
                <button onClick = {this.toggleDescription}>{this.props.title}</button>
                <ProjectDescription isShown={this.showDescription} languages={this.props.languages} description={this.props.description} />
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default Project;