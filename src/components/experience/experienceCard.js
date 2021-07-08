import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
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
    const { image, label, organization, images, note } = this.props;
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
          <Card.Link href="#" onClick={this.toggleOpen}>
            {open? "Less": "More"} <FontAwesomeIcon icon={open? faChevronUp: faChevronDown}/>
          </Card.Link>
        </Card.Footer>
        <Card.Body className={open? "": "d-none"}>
          { note?.split('\n').map(this.renderNote) }
          <GalleryComponent className="img-container" images={images}/>
        </Card.Body>
      </Card>
    )
  }
}

export default ExperienceCardComponent;
