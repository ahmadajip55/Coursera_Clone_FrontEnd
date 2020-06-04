import React from "react";
import "../styles/style.css"
import { Accordion, Nav } from "react-bootstrap";


const SidebarSupplement = (props) => {
    const paramsIdWeek = props.match.params.id
    const dataSubmodul = props.dataSubmodul ? props.dataSubmodul.filter((item) => {
        if (item.modul_id.week_id[0].id === parseInt(paramsIdWeek)) {
            return item;
        }
        return false;
    }) : null
    console.log("CEK DATA SUB MODUL SIDEBAR SUPPLEMENT", dataSubmodul)
    return (
        <div className="sidebarSupplement">
            {dataSubmodul ? dataSubmodul.map((element) =>
                <Accordion defaultActiveKey="0">
                    <a href="#home">
                        <Accordion.Toggle as={Nav} eventKey="0">
                            {element.name_submodul}
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
            ) : null}
        </div>
    )
}

export default SidebarSupplement