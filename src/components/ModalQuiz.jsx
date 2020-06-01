import React, { useState } from "react";
import "../styles/style.css"
import { Button, Container, Row, Col, Badge, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'

const ModalQuiz = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button onClick={() => setShow(true)} style={{ width: "100%", borderRadius: "0", color: "white", fontWeight: "500" }}>Resume</Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                className="modalQuiz"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header className="modalQuizHeader">
                    <Container fluid>
                        <Row>
                            <Col style={{ padding: "0" }} xs={2} sm={2} md={1} lg={1}>
                                <div>
                                    <i style={{ fontSize: "2rem", fontWeight: "600", margin: "1.5rem" }} class="fas fa-arrow-left" onClick={() => setShow(false)}></i>
                                </div>
                            </Col>
                            <Col xs={10} sm={10} md={11} lg={11} style={{ marginBottom: "auto", marginTop: "auto" }} >
                                <Row>
                                    <Col xs={12} sm={8} md={9} lg={10}>
                                        <div >
                                            <p style={{ marginBottom: "0", fontSize: "20px" }}>Petrology</p>
                                            <p style={{ marginBottom: "0", fontSize: "14px" }}>Graded Quiz <span style={{ paddingBottom: "-100px" }}>.</span> 30min</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={4} md={3} lg={2} style={{ marginBottom: "auto", marginTop: "auto" }} >
                                        <div>
                                            <p style={{ marginBottom: "0" }}><strong>Due </strong> May 24, 11:59 PM</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Header>
                <Modal.Body className="modalQuizBody">
                    <Container fluid>
                        <Row>
                            <Col lg={1}></Col>
                            <Col lg={10}>
                                <div className="quizQuestion">
                                    <div className="nameQuizQuestion" style={{ borderBottom: "0.4px solid #d9d7d7" }}>
                                        <p style={{ fontSize: "2.125rem", fontWeight: "800" }}>Geology</p>
                                        <p style={{ fontSize: "0.8rem", fontWeight: "600" }}>TOTAL POINTS<span> 12</span></p>
                                    </div>
                                    <div className="contentQuizQuestion">
                                        <div className="questionChoice">
                                            <Container fluid>
                                                <Row>
                                                    <Col xs={1} sm={1} md={1} lg={1}>
                                                        <div className="numberQuestionQuiz">
                                                            <p>1</p>
                                                        </div>
                                                    </Col>
                                                    <Col xs={8} sm={8} md={8} lg={8}>
                                                        <div className="questionQuiz">
                                                            <p>What is the hardest mineral in the world ?</p>
                                                        </div>
                                                    </Col>
                                                    <Col xs={3} sm={3} md={3} lg={3}>
                                                        <div>
                                                            <Badge pill variant="dark" style={{ padding: "0.5rem 1rem 0.5rem 1rem" }}>1 point</Badge>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <Container fluid>
                                                <Form.Group as={Row}>
                                                    <Form.Label as="legend" column xs={1} sm={1} md={1} lg={1}>
                                                    </Form.Label>
                                                    <Col xs={11} sm={11} md={11} lg={11}>
                                                        <Form.Check
                                                            type="radio"
                                                            label="Quartz"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios1"
                                                        />
                                                        <Form.Check
                                                            type="radio"
                                                            label="Chertz"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios2"
                                                        />
                                                        <Form.Check
                                                            type="radio"
                                                            label="Diamond"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios3"
                                                        />
                                                        <Form.Check
                                                            type="radio"
                                                            label="Talk"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios3"
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </Container>
                                        </div>
                                        <div className="questionChoice">
                                            <Container fluid>
                                                <Row>
                                                    <Col xs={1} sm={1} md={1} lg={1}>
                                                        <div className="numberQuestionQuiz">
                                                            <p>1</p>
                                                        </div>
                                                    </Col>
                                                    <Col xs={8} sm={8} md={8} lg={8}>
                                                        <div className="questionQuiz">
                                                            <p>What is the hardest mineral in the world ?</p>
                                                        </div>
                                                    </Col>
                                                    <Col xs={3} sm={3} md={3} lg={3}>
                                                        <div>
                                                            <Badge pill variant="dark" style={{ padding: "0.5rem 1rem 0.5rem 1rem" }}>1 point</Badge>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <Container fluid>
                                                <Form.Group as={Row}>
                                                    <Form.Label as="legend" column xs={1} sm={1} md={1} lg={1}>
                                                    </Form.Label>
                                                    <Col xs={11} sm={11} md={11} lg={11}>
                                                        <Form.Check
                                                            type="radio"
                                                            label="Quartz"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios1"
                                                        />
                                                        <Form.Check
                                                            type="radio"
                                                            label="Chertz"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios2"
                                                        />
                                                        <Form.Check
                                                            type="radio"
                                                            label="Diamond"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios3"
                                                        />
                                                        <Form.Check
                                                            type="radio"
                                                            label="Talk"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios3"
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </Container>
                                        </div>
                                    </div>
                                    <div className="buttonQuizQuestion">
                                        <Button variant="outline-primary" style={{ marginRight: "1rem" }}><strong>Save</strong></Button>
                                        <Button variant="secondary"><strong>Submit</strong></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={1}></Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalQuiz