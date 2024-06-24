import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import doctor from "../../Assets/Projects/doctor.png";
import npm from "../../Assets/Projects/npm.jpg";
import whether from "../../Assets/Projects/whether.png";
import tech_blog from "../../Assets/Projects/tech_blog.png";
import money from "../../Assets/Projects/money.png";
// import npm from "../../Assets/Projects/npm.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tech_blog}
              isBlog={false}
              title="Tech_blog"
              description="The Tech Blog project is a dynamic web application designed for technology enthusiasts to share and discuss the latest trends and advancements in technology. 
              It features a user-friendly interface for creating, reading, updating, and deleting blog posts, along with comment sections for interactive discussions. The application incorporates authentication to ensure secure user access and provides a responsive design for seamless use across various devices. Built with modern web technologies, it aims to foster a vibrant community of tech-savvy individuals."
              ghLink="https://github.com/MadalapureVaishnavi/my_post"
              demoLink="https://github.com/MadalapureVaishnavi/my_post"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={npm}
              isBlog={false}
              title="npm Package- simple-date-utils"
              description="The `simple-date-utils` npm package provides a collection of lightweight, easy-to-use utilities for common date and time operations in JavaScript. It simplifies tasks such as formatting dates, calculating date differences, and manipulating date values without the overhead of larger libraries. Ideal for projects requiring straightforward date handling without additional dependencies. "
              ghLink="https://github.com/MadalapureVaishnavi/simple_date_utils"
              demoLink="https://github.com/MadalapureVaishnavi/simple_date_utils"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whether}
              isBlog={false}
              title="Wheather application"
              description="The Weather Application project is a user-friendly tool designed to provide real-time weather updates for any location. Users can search for and receive current weather conditions, including temperature, humidity, and forecast details. The application fetches data from a weather API, presenting the information in a clean and intuitive interface. It is built using modern web technologies to ensure responsiveness and ease of use across various devices."
              ghLink="https://github.com/MadalapureVaishnavi/Weather_App"
              demoLink="https://wheatherappvaish.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doctor}
              isBlog={false}
              title="Blood Bank System"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/MadalapureVaishnavi/blood_bank_system"
              demoLink="https://github.com/MadalapureVaishnavi/blood_bank_system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={money}
              isBlog={false}
              title="Money Tracker"
              description="The Blood Bank System project is designed to streamline and manage blood donation processes efficiently. It enables the registration of donors and recipients, tracks blood inventory levels, and facilitates the matching of blood types for transfusions. The system also provides alerts for low inventory and schedules donation drives. This ensures a reliable and timely supply of blood to those in need."
              ghLink="https://github.com/MadalapureVaishnavi/Money_tracker"
              demoLink="https://github.com/MadalapureVaishnavi/Money_tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={npm}
              isBlog={false}
              title="npm package- json-compare-lite"
              description="`npm package-json-compare-lite` is a lightweight tool designed to compare `package.json` files in Node.js projects. It offers a simple interface for identifying discrepancies between dependencies, devDependencies, and other metadata. This utility streamlines the process of managing package versions and ensures project consistency across different environments. With minimal configuration, it helps developers maintain the integrity of their Node.js projects efficiently."
              ghLink="https://github.com/MadalapureVaishnavi/json-compare-lite"
              demoLink="https://github.com/MadalapureVaishnavi/json-compare-lite"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
