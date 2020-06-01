import React from "react";
import "../styles/style.css"
import { Button } from "react-bootstrap";


const ContentSupplement = () => {
    return (
        <div className="contentSupplement">
            <div className="namePointContentSupplement">
                <p>Ultramafik Rock</p>
            </div>
            <div className="fillNamePointContentSupplement">
                <p>Smith, E. (2018). Thinking like a psychological scientist. In R. Biswas-Diener & E. Diener (Eds), Noba textbook series: Psychology. Champaign, IL: DEF publishers. DOI:nobaproject.com</p>
            </div>
            <div style={{ textAlign: "right", marginBottom: "3rem" }} >
                <span><i style={{ marginRight: "0.5rem", color: "green", fontSize: "0.8rem" }} className="fas fa-check"></i>Complete</span>
                <Button style={{ borderRadius: "0px", fontSize: "12px", marginLeft: "0.5rem", marginRight: "25px" }}>Mark as completed</Button>
            </div>
        </div>
    )
}

export default ContentSupplement