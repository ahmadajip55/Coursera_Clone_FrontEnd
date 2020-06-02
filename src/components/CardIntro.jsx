import React from "react";
import "../styles/style.css"
import { Card, Button, Row, Col } from "react-bootstrap";


const CardIntro = () => {
    return (
        <Card className="cardIntro">
            {/* <Card.Header className="cardIntroHeader">WEEK 1</Card.Header> */}
            <Card.Header className="cardIntroHeader">WEEK 1</Card.Header>
            <Card.Body className="cardIntroBody">
                <Row>
                    <Col lg={10}>
                        <Card.Title className="cardIntroTitle">About this course</Card.Title>
                        <Card.Text>
                            It'll take about 10 min. After you're done,
                            continue on and try finishing the week ahead of schedule.
                        </Card.Text>
                    </Col>
                    <Col lg={2}>
                        <Button className="cardIntroButton mt-2" variant="primary">Start</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default CardIntro