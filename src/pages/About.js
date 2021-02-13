import React from "react";
import { Container, Row, Col } from "../components/Grid";
import camilaPicture from "../images/camilaPicture.jpg";
import BootSrap from "../images/icons/bootStrap.png";
import Css from "../images/icons/css.png";
import Express from "../images/icons/express.png";
import GitHub from "../images/icons/gitHub.png";
import Html from "../images/icons/html.png";
import Js from "../images/icons/js.png";
import MongoDB from "../images/icons/mongoDB.png";
import MySQL from "../images/icons/mySQL.png";
import NodeIcon from "../images/icons/node.png";
import ReactIcon from "../images/icons/react.png";

function About() {
  return (
    <main className="aboutMeBackground">
      <div className="aboutMe">
        <Container fluid>
          <Row>
            <Col size="sm-3">
              <img
                alt="Camila Alves Meyer"
                className="img-thumbnail rounded-circle border-primary"
                src={camilaPicture}
               />
            </Col>
            <Col size="sm-9">
              <h3>About Me</h3>
              <p className="pAboutMe">
                Software Engineer with a Mechanical Engineering background
                experienced in regulatory compliance and review of safety
                aspects of mechanical systems and electro-electronic components.
                With a Certificate in Full Stack Web Development from the
                University of Central Florida. Skills in JavaScript, including
                API interaction (JSON/AJAX), database integration
                (MySQL/MongoDB), server-side development (Node.js/Express), and
                quality assurance (unit testing). Expert in completing demanding
                assignments within crucial timelines. Highly articulate,
                demonstrating excellent interpersonal skills. Excited to develop
                responsive web apps with a focus on mobile-first experience
                using the MERN stack.
              </p>
            </Col>
          </Row>
          <Row>
            <Col size="sm-3" />
            <Col size="sm-9">
              <h3>Skills</h3>
              <img alt="GitHub icon" className="iconSkills" src={GitHub} />
              <img alt="Html icon" className="iconSkills" src={Html} />
              <img alt="Css icon" className="iconSkills" src={Css} />
              <img alt="Js icon" className="iconSkills" src={Js} />
              <img
                alt="MongoDB icon"
                className="iconSkills"
                src={MongoDB}
               />
              <img
                alt="Express icon"
                className="iconSkills"
                src={Express}
               />
              <img
                alt="React icon"
                className="iconSkills"
                src={ReactIcon}
               />
              <img alt="Node icon" className="iconSkills" src={NodeIcon} />
              <img alt="MySQL icon" className="iconSkills" src={MySQL} />
              <img
                alt="BootSrap icon"
                className="iconSkills"
                src={BootSrap}
               />
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default About;
