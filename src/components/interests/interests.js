import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import CustomCard from '../card/card';
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

	renderLoading = () => <div>Loading interests</div>

	renderInterestAdditionalItem = ({key, value, notes, url, start, finish}, i) =>
		<tr key={i+1}>
			<th scope="row">{i+1}</th>
			<td>{key}</td>
			<td>
				{(url && <a href={url}>{value}</a>) || value}
			</td>
			<td>{notes || ''}</td>
			<td>
				{start && `Start: ${start}`}
				{(start && finish && '\n') || ''}
				{finish && `Finish: ${finish}`}
			</td>
		</tr>

	renderInterestAdditional = (additional) =>
		<table className="table table-hover">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col"></th>
					<th scope="col"></th>
					<th scope="col"></th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				{additional.map(this.renderInterestAdditionalItem)}
			</tbody>
		</table>

	render() {
		if(this.state.interests == null) {
			return this.renderLoading();
		}

		return (
			<Row xs={1} md={2} lg={3} className="g-4">
			  {this.state.interests.map(({label, level, additional}, i) =>
			    <Col key={i+1} className="my-3">
            <CustomCard
              key={i+1}
              image={null}
              title={label}
              titleNote={level? `(${level})`: ''}
              data={this.renderInterestAdditional(additional)}
            ></CustomCard>
			    </Col>
			  )}
			</Row>
		)
	}
}

export default InterestsComponent;
