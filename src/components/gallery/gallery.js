import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './gallery.css';


class GalleryComponent extends Component {

  renderItem = ({ image, label, note }, i) =>
    <Carousel.Item className="h-100" key={i}>
      <img
        className="d-block w-100 h-100"
        src={image}
        alt="slide"
      />
      <Carousel.Caption>
        { label && <h3>{label}</h3> }
        { note && <p>{note}</p> }
      </Carousel.Caption>
    </Carousel.Item>
  
  render() {
    const { images, className } = this.props;

    if(images.length === 0) {
      return "";
    }

    return (
      <Carousel
        className={className}
        nextIcon={<FontAwesomeIcon icon={faChevronRight} />}
        prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}
      >
        {images.map(this.renderItem)}
    	</Carousel>
    )
  }
}

export default GalleryComponent;
