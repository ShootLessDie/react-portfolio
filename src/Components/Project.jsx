import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Project = ({ id, name, description, imageSrc, github, deployment }) => {
  console.log(name);
  return (
    <Col md={6}>
      <Card style={{ width: "auto", margin: "0.5rem" }}>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            Github link: <Card.Link>{github}</Card.Link>
          </Card.Text>
          <Card.Text>
            Deployed application: <Card.Link>{deployment}</Card.Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Project;
