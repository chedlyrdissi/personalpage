import React, { Component } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SearchComponent from '../search/search';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'


class HeaderComponent extends Component {

	render() {
		return (
			<Navbar expand="lg">
			  <Navbar.Brand href="/personalpage/" className="logo-grid text-center">
			  	<img className="icon" src={process.env.PUBLIC_URL + "/wings.png"} alt="logo"/>
					Chedli Redissi
			  </Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav">
		        <FontAwesomeIcon icon={faBars} />
			  </Navbar.Toggle>
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto nav-bar">
			      <Nav.Item>
					    <Nav.Link href="/personalpage/">Home</Nav.Link>
					  </Nav.Item>
					  <Nav.Item>
					    <Nav.Link href="/personalpage/interests">Interests</Nav.Link>
					  </Nav.Item>
					  <Nav.Item>
					    <Nav.Link href="/personalpage/experience">Experience</Nav.Link>
					  </Nav.Item>
					  <Nav.Item>
					    <Dropdown>
							  <Dropdown.Toggle variant="none" as="a" className="nav-link">
							    Projects
							  </Dropdown.Toggle>

							  <Dropdown.Menu className="dropdown-menu">
							    <Dropdown.Item href="/personalpage/projects/side" as="a">Side</Dropdown.Item>
							    <Dropdown.Item href="/personalpage/projects/school" as="a">School</Dropdown.Item>
							    <Dropdown.Divider/>
							    <Dropdown.Item href="/personalpage/projects/contracts" as="a">Contracts</Dropdown.Item>
							  </Dropdown.Menu>
							</Dropdown>
					  </Nav.Item>
			    </Nav>
  				<SearchComponent/>
			  </Navbar.Collapse>
			</Navbar>	
		)
	}
}

export default HeaderComponent;
