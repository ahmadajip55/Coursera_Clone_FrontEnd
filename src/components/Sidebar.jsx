import React from "react";
import "../styles/style.css"
import { Accordion, Nav } from "react-bootstrap";


const Sidebar = (props) => {
    console.log("CEKSIDEBAR", props.dataCourse)
    return (
        < div className="sidebar" >
            <div className="sidebarCourse">
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/b4/339da416653830d015f5a179f864e1/square_logo_large.png?auto=format%2Ccompress&dpr=1&w=56px&h=56px&auto=format%2Ccompress&dpr=1&w=&h=" alt="logoCourse" />
            </div>
            <Accordion defaultActiveKey="0">
                <a href="#home">
                    <Accordion.Toggle as={Nav} eventKey="0">
                        Overview
                    </Accordion.Toggle>
                </a>
                {props.dataCourse.course ? props.dataCourse.course.map((element) =>
                    <Accordion.Collapse eventKey="0">
                        <a href="#home" style={{ paddingLeft: "100px" }} >{element.name_week}</a>
                    </Accordion.Collapse>
                ) : (null)}
            </Accordion>
            <a href="#news">Grades</a>
            <a href="#contact">Notes</a>
            <a href="#about">Discussion Forums</a>
            <a href="#about">Messages</a>
            <a href="#about">Course Info</a>
        </div >
    )
}

export default Sidebar