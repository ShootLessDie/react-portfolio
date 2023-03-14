import React from "react";
import data from "../data.json";
import Project from "../Components/Project";
import { Container, Row } from "react-bootstrap";

const Projects = () => {
  return (
    <Container>
      <br></br>
      <h1>Projects</h1>
      <br></br>
      <Row>
        <div></div>
        {data.map((item) => (
          <Project {...item} />
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
