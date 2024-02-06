import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              <i className="primary-header">
                I'm a Computer Science graduate student pursuing my Master's in Computer Science
                at the North Carolina State University.
              </i>{" "}
              <br />
              <br />My primary focus revolves around furthering my grasp of computer science fundamentals.
              I'm a dedicated learner keen on modeling real-world problems using a data-driven
              and analytical approach. I enjoy working with algorithm design, and data structures,
              and possess statistical and analytical skills. I strive to become a skilled software
              developer and create solutions that matter.
              {" "}
              <br />
              <br />Currently, I'm seeking opportunities for intern roles in SWE, SDE, Data Science, and ML starting May 2024.
              Feel free to connect with me at
              <p>
                <b>
                  <a href="mailto:jshah22@ncsu.edu">jshah22@ncsu.edu</a>
                </b>{" "}
              </p>
              <p>
                <b>
                  <a href="tel:+19195594593">+1 919 559 4593</a>
                </b>{" "}
              </p>
              <br />
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left"></p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/jaiwinshah3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:jshah22@ncsu.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jaiwinshah/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container >
  );
}
export default Home2;
