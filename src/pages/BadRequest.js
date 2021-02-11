import React from "react";
import Jumbotron from "../components/Jumbotron"
import { Container, Row, Col } from "../components/Grid"

function BadRequest () {
    return (
        <Container className="homeBackground">
            <Row>
                <Col size="sm-12">
                    <Jumbotron>
                        <h1>404 Page Not Found</h1>
                        <h1>
                        <span role="img" aria-label="Face With Rolling Eyes Emoji">
                            🙄
                        </span>
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default BadRequest;