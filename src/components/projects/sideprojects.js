import React, { Component } from 'react';
import ProjectsComponent from './projects';

class SideProjectsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { projects: null };
		fetch(`${process.env.PUBLIC_URL}/data/side.json`)
			.then(data => data.json())
			.then(projects => {
				this.setState({ projects });
			});
	}

	render() {
		const { projects } = this.state;
		return (<ProjectsComponent projects={projects} />)
	}
}

export default SideProjectsComponent;
