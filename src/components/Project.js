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
        const status = (this.props.wip) ? "In Progress" : "Discontinued";
        return (
            <div className="Project">
                <button onClick={this.toggleDescription}>{this.props.title + " (" + status + ")"}{
                    this.state.showDescription && <ProjectDescription languages={this.props.languages} goal={this.props.goal} features={this.props.features} future={this.props.future} />
                }</button>
            </div>
        );
    }
}

export default Project;