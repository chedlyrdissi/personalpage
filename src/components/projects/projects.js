import React, { Component } from 'react';
import { Container, Spinner, Row, Col } from 'react-bootstrap';
import CustomCard from '../card/card';
import GalleryComponent from '../gallery/gallery'


class ProjectsComponent extends Component {
  renderLoading = () =>
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>

  renderProjectData = ({name, description, url, urlSource, started, finished, status, technologies, image, images}, index) =>
    <>
      {url && <div><a href={url}>{name} {urlSource? `(${urlSource})`:''}</a></div>}
      {status && <div><label>Status: {status}</label></div>}
      {started && <div><label>Started on: {started}</label></div>}
      {finished && <div><label>Finished on: {finished}</label></div>}
      {description && <p>{description}</p>}
      {technologies && <div>
          <h5>Technologies:</h5>
          <ul>
            {technologies.map((tech, i) => <li key={i}>{tech}</li>)}
          </ul>
        </div>
      }
      {images && <GalleryComponent className="img-container" images={images}/>}
    </>

  render() {
    const { projects } = this.props;

    return (
      <Container fluid className="position-relative h-100">
        {projects === null?
          this.renderLoading():
          <Row xs={1} md={2} lg={3} className="g-4">
            {projects.map((project, i) =>
              <Col key={i+1} className="my-3">
                <CustomCard
                  key={i+1}
                  image={project.image}
                  title={project.name}
                  titleNote={project.status}
                  data={this.renderProjectData(project, i+1)}
                ></CustomCard>
              </Col>
            )}
          </Row>
        }
      </Container>
    )
  }
}

export default ProjectsComponent;
