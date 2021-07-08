import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './search.css'


class SearchComponent extends Component {

	submit = (event) => {
		event.preventDefault();
		console.log(event.target[0].value);
		return false;
	}

	render() {
		return (
			<Form className="flex-nowrap" onSubmit={this.submit} inline>
			  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
			  <Button variant="none"><FontAwesomeIcon icon={faSearch}/></Button>
			</Form>
		)
	}
}

export default SearchComponent;
