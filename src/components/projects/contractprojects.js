import React, { Component } from 'react';
import ProjectsComponent from './projects';

class ContractProjectsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { projects: null };
		fetch(`${process.env.PUBLIC_URL}/data/contracts.json`)
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

export default ContractProjectsComponent;
