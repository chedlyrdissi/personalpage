import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css'


class HomeComponent extends Component {

  render() {
    return (
      <Container className="home-container">
        <Row>
          <Col>
            <img className="img-fit" src="/personalpage/images/chedly.jpg" alt="profile"/>
          </Col>
          <Col>
            <h5>Full name:</h5>
            <p className="ml-3">Chedli Redissi</p>

            <h5>Highest Degree:</h5>
            <p className="ml-3">Bachelor's degree in software engineering and entreprise management from the University of Ottawa</p>

            <h5>Links:</h5>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/chedli-redissi-90b59b16b/"> LinkedIn </a>
              </li>
              <li>
                <a href="https://github.com/chedlyrdissi/"> Github </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default HomeComponent;
