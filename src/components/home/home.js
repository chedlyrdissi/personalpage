import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css'


const labelStyle = {
  fontSize: "20px",
  bold: true
}

const LabelKey = ({ label }) => <label style={labelStyle}>{label}</label>

class HomeComponent extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <img className="img-fit" src="/personalpage/images/chedly.jpg" alt="profile"/>
          </Col>
          <Col>
            <p><LabelKey label="First name:" /> chedli</p>
            <p><LabelKey label="Last name:" /> redissi</p>

            <h5>Other:</h5>
            <p><LabelKey label="First name:" /> chedly</p>
            <p><LabelKey label="Last name:" /> rdissi</p>

            <h5>Highest Degree:</h5>
            <p>Bachelor's degree in software engineering and entreprise management from the University of Ottawa</p>

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
