import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import EducationCard from "./EducationCard";
import "./about.css";

import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              width: "100%"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }} data-aos="fade-right">
              <span className="primary-header">Professional Experience</span>
            </h1>
            <div data-aos="fade-up">
              <Aboutcard />
            </div>
          </Col>
          <Col md={7} style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
            width: "100%"
          }}>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              width: "100%"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }} data-aos="fade-right">
              <span className="primary-header">Education</span>
            </h1>
            <div data-aos="fade-up">
              <EducationCard />
            </div>
          </Col>
          <Col md={7} style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
            width: "100%"
          }}>
          </Col>
        </Row>

        <h1 data-aos="fade-right">
          <span className="primary-header">Skillset</span>
        </h1>

        <div data-aos="fade-up">
          <Techstack />
        </div>

        <h1 data-aos="fade-right">
          <span className="primary-header">Tools</span> I use
        </h1>
        <div data-aos="fade-up">
          <Toolstack data-aos="fade-up" />
        </div>

        {/* <Github /> */}

      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default About;