import React, { Component } from 'react';
import { Spinner, Row, Col } from 'react-bootstrap';
import CustomCard from '../card/card';
import GalleryComponent from '../gallery/gallery'


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

  renderLoading = () =>
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>

  renderExperienceData = (description, images, i) => <>
    {description && description.map(({type, value}, j) => {
      switch(type) {
        case 'p':
          return <p key={j}>{value}</p>
        case 'h5':
          return <h5 key={j}>{value}</h5>
        case 'li':
          return <ul key={j}>
            {value.map((item, k) => <li key={k}>{item}</li>)}
          </ul>
        default:
          return '';
      }
    })}
    {images && <GalleryComponent className="img-container" images={images}/>}
  </>

  render() {
    const { experience } = this.state;
    if(!experience) {
      return this.renderLoading();
    }
    return (
      <Row xs={1} md={2} lg={3} className="g-4">
        {experience.map(({label, description, organization, image, images}, i) =>
          <Col key={i+1} className="my-3">
            <CustomCard
              key={i+1}
              image={image}
              title={label}
              titleNote={organization}
              data={this.renderExperienceData(description, images, i+1)}
            ></CustomCard>
          </Col>
        )}
      </Row>
    )
  }
}

export default ExperienceComponent;
