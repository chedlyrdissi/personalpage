import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap'
import './interests.css';


class InterestsComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			interests: null
		}

		fetch(process.env.PUBLIC_URL + "/data/interests.json")
			.then(data => data.json())
			.then(data => {
				this.setState({ interests: data })
			})
	}

	renderDescription = (interest) => {
		if(!interest.description) {
			return ""
		}

		return <label>{interest.description}</label>
	}

	renderInterestAdditionalItem = (item, i) =>
		<tr key={i+1}>
			<th scope="row">{i+1}</th>
			<td>{item.label}</td>
			<td>{item.note || ''}</td>
		</tr>

	renderInterestAdditional = (additional) =>
		<table className="table table-hover">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">label</th>
					<th scope="col">note</th>
				</tr>
			</thead>
			<tbody>
				{additional.map(this.renderInterestAdditionalItem)}
			</tbody>
		</table>

	renderInterestItem = (interest, i) =>
		<Card key={i+1}>
	    <Card.Header>
	      <Accordion.Toggle as="a" eventKey={i+1}>
	        {interest.label} {interest.level? `(${interest.level})`: ""}
	      </Accordion.Toggle>
	    </Card.Header>
	    <Accordion.Collapse eventKey={i+1}>
	      <Card.Body className="accordion-body">
	      	{this.renderDescription(interest)}
	      	{interest.additional.length > 0 && this.renderInterestAdditional(interest.additional)}
	      </Card.Body>
	    </Accordion.Collapse>
	  </Card>

	render() {

		if(this.state.interests == null) {
			return (<div>Loading interests</div>)
		}

		return (
			<Accordion>
			  {this.state.interests.map(this.renderInterestItem)}
			</Accordion>
		)
	}
}

export default InterestsComponent;
