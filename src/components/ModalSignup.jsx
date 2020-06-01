import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css"
import { Button, Row, Col, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'

const ModalSignup = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    return (
        <>
            <Button variant="primary" style={{ borderRadius: "0px" }} onClick={() => setShowSignup(true)}> Join for Free </Button>

            <Modal
                show={showSignup}
                onHide={() => setShowSignup(false)}
                animation={false}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header className="modalLoginHeader" closeButton>
                    <Modal.Title className="modalLoginTitle ml-auto mr-auto" id="example-custom-modal-styling-title">
                        <div>
                            <img src="https://d3njjcbhbojbot.cloudfront.net/web/bundles/userModal/images/coursera-logo.svg" alt="logo-coursera"></img>
                            <p>Learn skills from top universities for free</p>
                            <Row>
                                <Col><Link onClick={() => setShowLogin(true) || setShowSignup(false)} style={{ textDecoration: "none" }}><p style={{ color: "white" }}>LOG IN</p></Link></Col>
                                <Col><p><u>SIGN UP</u></p></Col>
                            </Row>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalLoginBody ml-auto mr-auto">
                    <Row>
                        <Col lg={12} className="mb-3">
                            <Button variant="primary" style={{ width: "100%", height: "48px", borderRadius: "0px" }}>
                                <i className="fab fa-facebook-square mr-4 mb-0 h4"></i>
                                <span style={{ fontSize: "18px", fontWeight: "800" }}>Continue with Facebook</span>
                            </Button>
                        </Col>
                        <Col lg={12} className="mb-3">
                            <Button variant="outline-dark" style={{ width: "100%", height: "48px", borderRadius: "0px" }}>
                                <i className="fab fa-apple mr-4 mb-0 h4"></i>
                                <span style={{ fontSize: "18px", fontWeight: "800" }}>Continue with Apple</span>
                            </Button>
                        </Col>
                    </Row>
                    <div style={{ textAlign: "center", marginBottom: "25px" }}>
                        <Row>
                            <Col sm={5} md={5} lg={5} style={{ borderBottom: "1px solid grey", marginBottom: "10px" }}></Col>
                            <Col sm={2} md={2} lg={2}>or</Col>
                            <Col sm={5} md={5} lg={5} style={{ borderBottom: "1px solid grey", marginBottom: "10px" }}></Col>
                        </Row>
                    </div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><strong>FULLNAME</strong></Form.Label>
                            <Form.Control type="text" placeholder="FULLNAME" style={{ width: "100%", height: "48px", borderRadius: "0px" }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><strong>USERNAME</strong></Form.Label>
                            <Form.Control type="text" placeholder="USERNAME" style={{ width: "100%", height: "48px", borderRadius: "0px" }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label><strong>PIN</strong></Form.Label>
                            <Form.Control type="password" placeholder="PIN" style={{ width: "100%", height: "48px", borderRadius: "0px" }} />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{ width: "100%", height: "48px", borderRadius: "0px" }} className="mb-3">
                            Join for Free
                        </Button>
                    </Form>
                    <div style={{ textAlign: "center", marginBottom: "25px" }}>
                        <Row>
                            <Col sm={5} md={5} lg={5} style={{ borderBottom: "1px solid grey", marginBottom: "10px" }}></Col>
                            <Col sm={2} md={2} lg={2}>or</Col>
                            <Col sm={5} md={5} lg={5} style={{ borderBottom: "1px solid grey", marginBottom: "10px" }}></Col>
                        </Row>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <p style={{ cursor: "pointer", color: "blue", fontWeight: "700", fontSize: "16px" }}>Log in with your organization</p>
                        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                        <p>Having trouble logging in?</p>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal
                show={showLogin}
                onHide={() => setShowLogin(false)}
                animation={false}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header className="modalLoginHeader" closeButton>
                    <Modal.Title className="modalLoginTitle ml-auto mr-auto" id="example-custom-modal-styling-title">
                        <div>
                            <img src="https://d3njjcbhbojbot.cloudfront.net/web/bundles/userModal/images/coursera-logo.svg" alt="logo-coursera"></img>
                            <p>Learn skills from top universities for free</p>
                            <Row>
                                <Col><p><u>LOG IN</u></p></Col>
                                <Col><Link onClick={() => setShowSignup(true) || setShowLogin(false)} style={{ textDecoration: "none" }}><p style={{ color: "white" }}>SIGN UP</p></Link></Col>
                            </Row>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalLoginBody ml-auto mr-auto">
                    <Row>
                        <Col lg={12} className="mb-3">
                            <Button variant="primary" style={{ width: "100%", height: "48px", borderRadius: "0px" }}>
                                <i className="fab fa-facebook-square mr-4 mb-0 h4"></i>
                                <span style={{ fontSize: "18px", fontWeight: "800" }}>Continue with Facebook</span>
                            </Button>
                        </Col>
                        <Col lg={12} className="mb-3">
                            <Button variant="outline-dark" style={{ width: "100%", height: "48px", borderRadius: "0px" }}>
                                <i className="fab fa-apple mr-4 mb-0 h4"></i>
                                <span style={{ fontSize: "18px", fontWeight: "800" }}>Continue with Apple</span>
                            </Button>
                        </Col>
                    </Row>
                    <div style={{ textAlign: "center", marginBottom: "25px" }}>
                        <Row>
                            <Col sm={5} md={5} lg={5} style={{ borderBottom: "1px solid grey", marginBottom: "10px" }}></Col>
                            <Col sm={2} md={2} lg={2}>or</Col>
                            <Col sm={5} md={5} lg={5} style={{ borderBottom: "1px solid grey", marginBottom: "10px" }}></Col>
                        </Row>
                    </div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><strong>USERNAME</strong></Form.Label>
                            <Form.Control type="text" placeholder="USERNAME" style={{ width: "100%", height: "48px", borderRadius: "0px" }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label><strong>PIN</strong></Form.Label>
                            <Form.Control type="password" placeholder="PIN" style={{ width: "100%", height: "48px", borderRadius: "0px" }} />
                        </Form.Group>
                        <div style={{ textAlign: "right" }}>
                            <p style={{ fontSize: "1.2rem", fontWeight: "700", cursor: "pointer", color: "blue" }}>Forgot password?</p>
                        </div>
                        <Button variant="primary" type="submit" style={{ width: "100%", height: "48px", borderRadius: "0px" }} className="mb-3">
                            Log in
                        </Button>
                    </Form>
                    <div style={{ textAlign: "center", marginBottom: "25px" }}>
                        <Row>
                            <Col sm={5} md={5} lg={5} style={{ borderBottom: "1px solid grey", marginBottom: "10px" }}></Col>
                            <Col sm={2} md={2} lg={2}>or</Col>
                            <Col sm={5} md={5} lg={5} style={{ borderBottom: "1px solid grey", marginBottom: "10px" }}></Col>
                        </Row>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <p style={{ cursor: "pointer", color: "blue", fontWeight: "700", fontSize: "16px" }}>Log in with your organization</p>
                        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                        <p>Having trouble logging in?</p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalSignup