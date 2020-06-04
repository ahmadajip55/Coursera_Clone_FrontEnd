import React from "react";
import "../styles/style.css"
import { Jumbotron, Button, Row, Col } from "react-bootstrap";


const JumbotronEnroll = (props) => {
    return (
        <div className="jumbotronEnrollPage">
            <Jumbotron className="jumbotronEnroll">
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={6}>
                        <ul className="breadcrumbJumbotron">
                            <li><a href=".#">Home</a></li>
                            <li>Introduction to Geology</li>
                        </ul>
                        <h1>Introduction to Geology</h1>
                    </Col>
                    <Col lg={5}>
                        <span className="ml-2">Offered By</span>
                        <br className="mb-0" />
                        <span style={{ fontSize: "5rem", fontWeight: "800" }}>Yale</span>
                    </Col>
                </Row>
                <Row>
                    <Col lg={1}></Col>
                    <Col>
                        <p>
                            <Button variant="light" onClick={props.handleRequestToWelcome}>
                                <div>
                                    <p className="mb-1 h5" style={{ fontSize: "16px" }}><strong>Enroll for Free</strong></p>
                                    <p className="mb-0" style={{ fontSize: "12px" }}><strong>Starts May 28</strong></p>
                                </div>
                            </Button>
                        </p>
                        <span><strong>279,000</strong></span>
                        <span> already enrolled</span>
                    </Col>
                </Row>
            </Jumbotron>
        </div >
    )
}

export default JumbotronEnroll