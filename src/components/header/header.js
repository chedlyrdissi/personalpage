import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

const mobileViewWidth = 990;

class HeaderComponent extends Component {
  state = {mobileView: false}

  getActiveRoute() {
    const activeRoute = this.props.location.pathname.split('/').pop() || 'home';
    return activeRoute[0].toUpperCase() + activeRoute.substring(1);
  }

  isActive = (route, className) =>
    (route && route === this.props.location.pathname && (className || 'active-route')) || ''

  isProjectActive = () =>
    (this.props.location.pathname.includes('projects') && 'active-route') || ''

  updateMobileView() {    
    this.setState({mobileView: window.innerWidth <= mobileViewWidth})
  }

  componentDidMount() {
    this.updateMobileView();
    window.addEventListener('resize', () => this.updateMobileView());
  }

	render() {
    const { mobileView } = this.state;

		return (
			<Navbar expand="lg" className="header-container">
			  <Navbar.Brand as={Link} to="/" className="logo-grid text-center">
			  	<img className="icon" src={process.env.PUBLIC_URL + "/images/wings.png"} alt="logo"/>
					Chedli Redissi
			  </Navbar.Brand>
			  {mobileView &&
          <Navbar.Brand className="text-center active-route-container">
            <span className="active-route">
              {this.getActiveRoute()}
            </span>
          </Navbar.Brand>
        }
			  <Navbar.Toggle aria-controls="basic-navbar-nav">
		        <FontAwesomeIcon icon={faBars} />
			  </Navbar.Toggle>
			  <Navbar.Collapse id="basic-navbar-nav" className={`${mobileView? 'mx-2': 'mx-5'}`}>
			    <Nav className="m-auto nav-bar text-center">
			      <Nav.Item>
  				    <Nav.Link className={this.isActive('/')} as={Link} to="/">Home</Nav.Link>
  				  </Nav.Item>
  				  <Nav.Item>
  				    <Nav.Link className={this.isActive('/interests')} as={Link} to="/interests">Interests</Nav.Link>
  				  </Nav.Item>
  				  <Nav.Item>
  				    <Nav.Link className={this.isActive('/experience')} as={Link} to="/experience">Experience</Nav.Link>
  				  </Nav.Item>
  				  <Nav.Item>
  				    <Dropdown>
  						  <Dropdown.Toggle
                  as="a"
                  variant="none"
                  className={'nav-link ' + this.isProjectActive()}
                >
  						    Projects
  						  </Dropdown.Toggle>

  						  <Dropdown.Menu className="dropdown-menu">
  						    <Dropdown.Item className={this.isActive('/projects/side', 'active-route-project')} as={Link} to="/projects/side">Side</Dropdown.Item>
  						    <Dropdown.Item className={this.isActive('/projects/school', 'active-route-project')} as={Link} to="/projects/school">School</Dropdown.Item>
  						    <Dropdown.Divider/>
  						    <Dropdown.Item className={this.isActive('/projects/contracts', 'active-route-project')} as={Link} to="/projects/contracts">Contracts</Dropdown.Item>
  						  </Dropdown.Menu>
  						</Dropdown>
  				  </Nav.Item>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>	
		)
	}
}

export default withRouter(HeaderComponent);
