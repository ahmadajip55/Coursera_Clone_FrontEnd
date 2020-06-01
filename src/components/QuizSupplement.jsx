import React from "react";
import "../styles/style.css"
import { Container, Row, Col } from "react-bootstrap";
import ModalQuiz from "./ModalQuiz";


const QuizSupplement = () => {
    return (
        <div className="quizSupplement">
            <div>
                <p><strong>QUIZ 30 MIN</strong></p>
            </div>
            <div style={{ marginBottom: "7rem" }}>
                <p style={{ marginBottom: "0.2rem", fontSize: "3rem", fontFamily: "'Open Sans', sans-serif" }}><strong>Petrology</strong></p>
            </div>
            <div>
                <Container style={{ paddingLeft: "0", borderBottom: "0.4px solid #d9d7d7" }}>
                    <Row>
                        <Col lg={6} style={{ marginBottom: "1.5rem" }}>
                            <p style={{ marginBottom: "0.2rem", fontSize: "13px" }}><strong>Submit your assignment</strong></p>
                            <Row>
                                <Col>
                                    <p style={{ marginBottom: "0", fontSize: "13px", color: "grey" }}><strong>DUE</strong> <span>May 24, 11:59 PM PDT</span></p>
                                </Col>
                                <Col>
                                    <p style={{ marginBottom: "0", fontSize: "13px", color: "grey" }}><strong>ATTEMPS</strong> <span>3 every 8 hours</span></p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4}></Col>
                        <Col lg={2}>
                            <ModalQuiz />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
                <Container style={{ paddingLeft: "0" }}>
                    <Row>
                        <Col lg={8} style={{ marginBottom: "1.5rem" }}>
                            <p style={{ marginBottom: "0.2rem", fontSize: "13px" }}><strong>Receive Grade</strong></p>
                            <p style={{ marginBottom: "0.2rem", fontSize: "13px", color: "grey" }}><strong>TO PASS</strong><span> 80% or higher</span></p>
                        </Col>
                        <Col lg={4}>
                            <p style={{ marginBottom: "0.2rem", fontSize: "13px" }}><strong>Grade</strong></p>
                            <p style={{ marginBottom: "0.2rem", fontSize: "13px" }}>-</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

export default QuizSupplement