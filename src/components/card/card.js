import React, { Component } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import './card.css';


class CardComponent extends Component {
  state = {
    showDetails: false
  }

  setShowDetails = (showDetails) => this.setState({showDetails})

  render() {
    const { image, title, titleNote, data } = this.props;
    const { showDetails } = this.state;

    return (
      <Card className="shadow-card">
        {image && 
          <div className="position-relative img-container">
            <Card.Img variant="top" src={image}/>
            <Card.ImgOverlay className="p-0 text-center">
              <div className="h-100 w-100 card-body-middle">
                {title && <Card.Title>{title}</Card.Title>}
                {titleNote && <Card.Text>{titleNote}</Card.Text>}
              </div>
            </Card.ImgOverlay>
          </div>
        }
        {!image && <Card.Header><h5>{title}</h5></Card.Header>}

        <Card.Footer>
          <Button
            className="w-100"
            variant="none"
            disabled={!data}
            onClick={() => this.setShowDetails(true)}
          >
            {!data? "No Data": "Show details"}
          </Button>
          <Modal
            show={showDetails}
            onHide={() => this.setShowDetails(false)}
            size="lg"
            centered
            scrollable
          >
            {title &&
              <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>
            }
            <Modal.Body>{data}</Modal.Body>
            <Modal.Footer>
              <Button
                variant="none"
                onClick={() => this.setShowDetails(false)}
              >Close</Button>
            </Modal.Footer>
          </Modal>
        </Card.Footer>
      </Card>
    )
  }
}

export default CardComponent;
