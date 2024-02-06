import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Projects <strong className="Fluorescent-Blue"></strong>
        </h1>
        <p>Here are a few projects I've worked on</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="Application Tracker"
              description="This is an Application Tracking System. Frontend is made using React.js, CSS and Javascript. The database used is MongoDb. Both are connected using Python, Flask and REST API."
              ghLink="https://github.com/jaiwinshah3/application-tracking-system"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap."
              ghLink="https://github.com/jaiwinshah3/Jaiwin_portfolio"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Posture Correction Bot"
              description="Web application that detects and corrects user Posture. Used HTML, CSS, Javascript, Flask and API feature."
              ghLink="https://github.com/BassCoder2808/Posture_Detection_AND_Correction"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
