import React from "react";
import { Container, Row, Col } from "../components/Grid";
import camilaPicture from "../images/camilaPicture.jpg";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <main className="contactMeBackground">
      <div className="contacMe">
        <Container fluid>
          <Row>
            <Col size="sm-3">
              <img
                alt="Camila Alves Meyer"
                className="img-thumbnail rounded-circle border-primary"
                src={camilaPicture}
              ></img>
            </Col>
            <Col size="sm-9">
              <div className="pContacMe">
                <h1>Camila Alves Meyer</h1>
                <SocialIcon
                  url="https://github.com/Mimila-85"
                  className="mr-4"
                  target="_blank"
                  fgColor="#fff"
                  style={{ height: 35, width: 35 }}
                />
                <SocialIcon
                  url="https://www.linkedin.com/in/camila-alves-meyer/"
                  className="mr-4"
                  target="_blank"
                  fgColor="#fff"
                  style={{ height: 35, width: 35 }}
                />
                <SocialIcon
                  url="mailto:camila.alves85@gmail.com"
                  name="emailLink"
                  id="emailLink"
                  className="mr-4"
                  target="_blank"
                  fgColor="#fff"
                  style={{ height: 35, width: 35 }}
                />
                <SocialIcon
                  url="/assets/documents/CV_Camila_Alves_Meyer_Software_Engineer.pdf"
                  name="resume"
                  downloadclassName="mr-4"
                  target="_blank"
                  fgColor="#fff"
                  style={{ height: 35, width: 35 }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default Contact;
