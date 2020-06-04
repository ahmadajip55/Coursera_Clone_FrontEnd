import React from "react";
import "../styles/style.css"
import { Accordion, Card, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


const AccordionWeek = (props) => {
    console.log("ACCORDIONWEEKK", props)
    const changeRouter = async (id) => {
        props.history.replace("/supplement/" + id)
    }
    return (
        <div>
            {props.dataCourse.course ? props.dataCourse.course.map((element) =>
                <div>
                    <Accordion defaultActiveKey="0">
                        <Card className="accordionWeekCard">
                            <Link className="accordionWeekLink">
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <div>
                                        <Row>
                                            <Col lg={3}>
                                                <span className="accordionWeekHeaderWeek">{element.name_week}</span>
                                            </Col>
                                            <Col lg={{ span: 4, offset: 5 }}>
                                                <span className="accordionWeekHeaderTime">Estimated Time: {parseInt(element.total_duration_minute / 60)} h {element.total_duration_minute % 60} min</span>
                                            </Col>
                                        </Row>
                                    </div>
                                </Accordion.Toggle>
                            </Link>
                            {element.modul.map((element) =>
                                <Accordion.Collapse id="accordionWeekSubmodul" eventKey="0">
                                    <Card.Body>
                                        <p>{element.name_modul}</p>
                                        <Row>
                                            <Col className="p-0" lg={5}>
                                                <div id="accordionWeekCategory">
                                                    {Object.keys(element.content_duration_minute).map((keys) =>
                                                        <div>
                                                            <div className="py-3" id="contentCategoryCourse" onClick={() => changeRouter(element.week_id)}>{keys} &nbsp; <i class="far fa-circle"></i><strong> &nbsp; {parseInt(element.content_duration_minute[keys] / 60)} h {element.content_duration_minute[keys] % 60} min left</strong></div>
                                                        </div>
                                                    )}
                                                </div>
                                            </Col>
                                            <Col className="p-0" lg={7}>
                                                <div id="accordionWeekQuiz">
                                                    <Table responsive borderless>
                                                        <thead>
                                                            <tr>
                                                                <th>Required</th>
                                                                <th>Grade</th>
                                                                <th>Due</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody onClick={() => changeRouter(1)}>
                                                            <tr>
                                                                <td>
                                                                    <span><strong>Quiz</strong></span>
                                                                    <br />
                                                                    <span>{element.name_modul}</span>
                                                                    <br />
                                                                    <span><strong>{parseInt(element.quiz_duration_minute / 60)} h {element.quiz_duration_minute % 60} min</strong></span>
                                                                </td>
                                                                <td></td>
                                                                <td>
                                                                    <span>June 1</span>
                                                                    <br />
                                                                    <span>11.59</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Accordion.Collapse>
                            )}
                        </Card>
                    </Accordion>
                </div>
            ) : (null)
            }
        </div >
    )
}

export default AccordionWeek