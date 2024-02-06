import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./about.css";
import ncsuLogo from "./ncsu-logo.png"; // Import the logo image
import uom from "./university_of_mumbai.png";
function EducationCard() {
    return (
        <div className="about-card-container-x">
            <Card className="quote-card-view-x">
                <Card.Body>
                    <div className="education-header">
                        <img src={ncsuLogo} alt="NC State University Logo" className="education-logo" />
                        <div className="education-details">
                            <h3>North Carolina State University</h3>
                            <h5>Master's in Computer Science</h5>
                            <h6>August 2023 - May 2021</h6>
                        </div>
                    </div>
                    <blockquote className="blockquote mb-0" data-aos="zoom-in">
                        <ul>
                            <li className="about-activity-x">
                                <AiOutlineArrowRight /> Grade: 3.9/4
                            </li>
                            <li className="about-activity-x">
                                <AiOutlineArrowRight /> Courses: Design and Analysis of Algorithms, Software Engineering
                            </li>
                        </ul>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card className="quote-card-view-x">
                <Card.Body>
                    <div className="education-header">
                        <img src={uom} alt="University of Mumbai logo" className="company-logo" />
                        <div className="education-details">
                            <h3>University of Mumbai</h3>
                            <h5>Bachelor's in Computer Engineering</h5>
                            <h6>August 2019 - May 2023</h6>
                        </div>
                    </div>
                    <blockquote className="blockquote mb-0" data-aos="zoom-in">
                        <ul>
                            <li className="about-activity-x">
                                <AiOutlineArrowRight /> Grade: 9.07/10</li>

                            <li className="about-activity-x">
                                <AiOutlineArrowRight /> Courses: Data Structures, Machine Learing, Big Data, Machine Learning, Artificial Intelligence.</li>
                        </ul>
                    </blockquote>
                </Card.Body>
            </Card>
            {/* Rest of the component */}
            <img />
        </div>
    );
}

export default EducationCard;