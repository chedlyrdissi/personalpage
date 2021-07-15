import React, { Component } from 'react';


class ProjectComponent extends Component {
	render() {
		const { project } = this.props;
		return (
			<p>
				{project.label}
			</p>
		)
	}
}

export default ProjectComponent;
