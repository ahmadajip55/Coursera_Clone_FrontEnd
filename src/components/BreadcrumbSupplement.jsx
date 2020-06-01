import React from "react";
import "../styles/style.css"
import { Row, Col } from "react-bootstrap";


const BreadcrumbSupplement = () => {
    return (
        <div className="rowBreadcrumbSupplement">
            <Row>
                <Col lg={6}>
                    <div className="breadcrumbSupplement">
                        <ul>
                            <li><a href=".#">Introduction to Geology</a></li>
                            <li><a href=".#">Week 2</a></li>
                            <li>Kinematic Analysis</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="rightBreadcrumbSupplement" style={{ textAlign: "right", color: "grey" }}>
                        <p style={{ marginBottom: "0px" }}>Home <span> &nbsp;&nbsp;|&nbsp;&nbsp; </span><span> Next</span></p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default BreadcrumbSupplement