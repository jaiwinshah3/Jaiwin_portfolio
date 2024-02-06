import React from "react";
import "./about.css";
import Card from "react-bootstrap/Card";
import spjimr from "./spjimr.png";
import vm from "./vm.png";
import colgate from "./colgate.png";
function AboutCard() {
  return (
    <div className="about-card-container">
      <Card className="quote-card-view">
        <Card.Body>
          <img src={colgate} alt="colgate" className="company-logo" />
          <h3>Colgate Palmolive</h3>
          <h5>Data Engineer Intern</h5>
          <h6>January 2022- July 2022</h6>
          <blockquote className="blockquote mb-0" data-aos="zoom-in">
            <ul>
              <li className="about-activity">
                Built interactive Tableau Dashboards to visualize demand patterns
              </li>
              <li className="about-activity">
                Migrated data  from on-premise databases to GCP (cloud based databases)
              </li>
              <li className="about-activity">
                Analyzed large scale dataset using data science techniques &
                forecasted safety stock levels
              </li>
              <li className="about-activity">
                Designed Python scripts to automate tasks
              </li>

              <li className="about-activity">
                Presented the results to the team’s global head
              </li>
            </ul>
          </blockquote>

        </Card.Body>
      </Card>
      <Card className="quote-card-view">
        <Card.Body>
          <img src={vm} alt="SPJMIR" className="company-logo" />
          <h3>VM Enterprise</h3>
          <h5>Software Development Intern</h5>
          <h6>July 2021- September 2021</h6>
          <blockquote className="blockquote mb-0-0" data-aos="zoom-in">
            <ul>
              <li className="about-activity">
                Developed a web application using React & Javascript, and added a
                recommendation system built with python
              </li>
              <li className="about-activity">
                Utilized Flask, PostgreSQL, Postman, Python and RESTful API
              </li>
              <li className="about-activity">
                Performed Unit testing techniques to test the app
              </li>
              <li className="about-activity">
                Created logic for user verification with google authentication module
              </li>
            </ul>

          </blockquote>
        </Card.Body>
      </Card>


      <Card className="quote-card-view">
        <Card.Body>
          <img src={spjimr} alt="SPJMIR" className="company-logo" />
          <h3>SPJIMR</h3>
          <h5>Research Assistant</h5>
          <h6>June 2020- July 2020</h6>
          <blockquote className="blockquote mb-0-0" data-aos="zoom-in">
            <ul>
              <li className="about-activity">
                Conducted comparative analysis of global factors affecting education,
                identifying patterns that affect it and extract the data
                using web scraping techniques
              </li>
              <li className="about-activity">
                Analyzed, cleaned and structured the data to find the trends and
                gave insights from the large log of dataset containing more
                than 1 million data points using Statistical techniques like
                Exploratory Data Analysis and Statistical Modelling
              </li>
            </ul>

          </blockquote>
        </Card.Body>
      </Card>

    </div>
  );
}

export default AboutCard;