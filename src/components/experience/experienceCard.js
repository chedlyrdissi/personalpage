import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import GalleryComponent from '../gallery/gallery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './experience.css';


class ExperienceCardComponent extends Component {

  state = {
    open: false
  }

  toggleOpen = () => this.setState({ open: !this.state.open })

  renderNote = (note, i) =>
    <Card.Text key={i}>
      { note }
    </Card.Text>

  render() {
    const { image, label, description, organization, images, note } = this.props;
    const { open } = this.state;

    return (
      <Card className="shadow-card">
        <div className="position-relative img-container">
          {image?
            <Card.Img variant="top" src={image}/>
            : ""
          }
          <Card.ImgOverlay>
            <Card.Body>
              <Card.Title>{label}</Card.Title>
              <Card.Text>
                {organization}
              </Card.Text>
            </Card.Body>
          </Card.ImgOverlay>
        </div>
        <Card.Footer>
          <Button className="w-100" variant="none" onClick={this.toggleOpen}>
            {open? "Less": "More"} <FontAwesomeIcon icon={open? faChevronUp: faChevronDown}/>
          </Button>
          <Card.Body className={open? "": "d-none"}>
            { description?.split('\n').map(this.renderNote) }
            <GalleryComponent className="img-container" images={images}/>
            { note?.split('\n').map(this.renderNote) }
          </Card.Body>
        </Card.Footer>
      </Card>
    )
  }
}

export default ExperienceCardComponent;
