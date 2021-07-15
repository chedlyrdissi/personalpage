import React, { Component } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import ProjectComponent from './project.js';


class ProjectsComponent extends Component {

	renderProject = (project, i) => <ProjectComponent key={i} project={project} />

	renderLoading = () =>
		<Spinner animation="border" role="status">
			<span className="sr-only">Loading...</span>
		</Spinner>

	render() {
		const { projects } = this.props;
		return (
			<Container>
				{projects === null?
					this.renderLoading():
					projects.map(this.renderProject)
				}
			</Container>
		)
	}
}

export default ProjectsComponent;
