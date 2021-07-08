import React, { Component } from 'react';
import { CardColumns, Spinner } from 'react-bootstrap';
import ExperienceCardComponent from './experienceCard';
import './experience.css';


class ExperienceComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      experience: null
    }

    fetch(process.env.PUBLIC_URL + "/data/experience.json")
      .then(data => data.json())
      .then(data => {
        this.setState({ experience: data })
      })
  }

  renderExperienceCard = (experienceItem, i) => <ExperienceCardComponent key={i} {...experienceItem}/>

  render() {
    if(!this.state.experience) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
    return (
      <CardColumns>
        {this.state.experience.map(this.renderExperienceCard)}
      </CardColumns>
    )
  }
}

export default ExperienceComponent;
