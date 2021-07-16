import React, { Component } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import ProjectPanelComponent from './projectpanel/projectpanel';


class ProjectsComponent extends Component {

	state = {
		open: false,
		selectedProject: null
	}

	selectProject = (project) => {
		this.setState({ open: true, selectedProject: project })
	}

	toggleOpen = () => {
		const { open } = this.state;
		this.setState({ open: !open })
	}

	renderProject = (project, i) =>
		<li
			key={i}
			onClick={() => this.selectProject(project)}
		>
			{project.name}
		</li>

	renderLoading = () =>
		<Spinner animation="border" role="status">
			<span className="sr-only">Loading...</span>
		</Spinner>

	render() {
		const { projects } = this.props;
		const { open, selectedProject } = this.state;

		return (
			<Container fluid className="position-relative h-100">
				{projects === null?
					this.renderLoading():
					<ul>
						{projects.map(this.renderProject)}
					</ul>
				}
				<ProjectPanelComponent
					open={open}
					project={selectedProject}
					openToggled={this.toggleOpen}
				/>
			</Container>
		)
	}
}

export default ProjectsComponent;
