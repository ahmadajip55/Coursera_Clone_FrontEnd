import React from "react";
import "../styles/style.css"
import { Accordion, Nav } from "react-bootstrap";


const SidebarSupplement = () => {
    return (
        <div className="sidebarSupplement">
            <Accordion defaultActiveKey="0">
                <a href="#home">
                    <Accordion.Toggle as={Nav} eventKey="0">
                        Igneous Rock
                </Accordion.Toggle>
                </a>
                <Accordion.Collapse eventKey="0">
                    <a href="#home" id="contentSidebarSupplement">
                        <span><strong>Video</strong></span> Ultramafic Rock
                        <p style={{ marginBottom: "0px" }}>4min</p>
                    </a>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <a href="#home" id="contentSidebarSupplement">
                        <span><strong>Video</strong></span> Mafic Rock
                        <p style={{ marginBottom: "0px" }}>4min</p>
                    </a>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <a href="#home" id="contentSidebarSupplement">
                        <span><strong>Video</strong></span> Felsic Rock
                        <p style={{ marginBottom: "0px" }}>4min</p>
                    </a>
                </Accordion.Collapse>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <a href="#home">
                    <Accordion.Toggle as={Nav} eventKey="0">
                        Sedimentary Rock
                </Accordion.Toggle>
                </a>
                <Accordion.Collapse eventKey="0">
                    <a href="#home" id="contentSidebarSupplement">
                        <span><strong>Video</strong></span> Clastic Rock
                        <p style={{ marginBottom: "0px" }}>4min</p>
                    </a>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <a href="#home" id="contentSidebarSupplement">
                        <span><strong>Video</strong></span> Biologist Rock
                        <p style={{ marginBottom: "0px" }}>4min</p>
                    </a>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <a href="#home" id="contentSidebarSupplement">
                        <span><strong>Video</strong></span> Chemical Rock
                        <p style={{ marginBottom: "0px" }}>4min</p>
                    </a>
                </Accordion.Collapse>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <a href="#home">
                    <Accordion.Toggle as={Nav} eventKey="0">
                        Metamorf Rock
                </Accordion.Toggle>
                </a>
                <Accordion.Collapse eventKey="0">
                    <a href="#home" id="contentSidebarSupplement">
                        <span><strong>Video</strong></span> Foliation Rock
                        <p style={{ marginBottom: "0px" }}>4min</p>
                    </a>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="0">
                    <a href="/quiz" id="contentSidebarSupplement">
                        <span><strong>Video</strong></span> Non Foliation Rock
                        <p style={{ marginBottom: "0px" }}>4min</p>
                    </a>
                </Accordion.Collapse>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <a href="#home">
                    <Accordion.Toggle as={Nav} eventKey="0">
                        Review
                </Accordion.Toggle>
                </a>
                <Accordion.Collapse eventKey="0">
                    <a href="#home" id="contentSidebarSupplement">
                        <span><strong>Quiz</strong></span> Petrology
                        <p style={{ marginBottom: "0px" }}>10 questions</p>
                    </a>
                </Accordion.Collapse>
            </Accordion>
        </div>
    )
}

export default SidebarSupplement