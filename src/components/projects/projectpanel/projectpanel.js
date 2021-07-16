import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import './projectpanel.css';


const panelStyle = {
	top: 0,
	right: 0,
	height: '100%'
}

class ProjectPanelComponent extends Component {
	
	renderProject = project => {
		if (project === null) {
			return <div>nothing selected</div>
		}

		const {
			name,
			description,
			url,
			urlSource,
			started,
			finished,
			status,
			technologies
		} = project

		return (
			<div>
				<h1 className="text-left">{name}</h1>
				<div>{description}</div>
				{url && 
					<div>
						<label>Source: </label> <a href={url} title={url}>{urlSource}</a>
					</div>
				}
				{started && <div><label>Started: </label> {started}</div>}
				{finished && <div><label>Finished: </label> {finished}</div>}
				{status && <div><label>Status: </label> {status}</div>}
				{technologies && technologies.length > 0 &&
					<div>
						<label>Technologies:</label>
						<ul>
							{technologies.map((tech, i) => <li key={i}>{tech}</li>)}
						</ul>
					</div>
				}
			</div>
		)
	}

	render() {
		const { open, project, openToggled } = this.props;
		return (
			<div className={`project-panel position-absolute h-100 ${open? "open-panel": ""}`} style={panelStyle}>
				<div className="position-relative h-100 w-100">
					<div className="position-absolute panel-toggle" onClick={openToggled}>
						<FontAwesomeIcon className="toggle-btn w-100 h-100" icon={open? faArrowCircleRight: faArrowCircleLeft}/>
					</div>
					<div className="position-absolute project-panel-detail h-100">
						<div className="w-100 h-100">
							{ open && this.renderProject(project) }
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ProjectPanelComponent;
