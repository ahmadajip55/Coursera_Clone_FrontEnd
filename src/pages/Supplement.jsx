import React, { Component } from "react"
import Header from "../components/Header"
import BreadcrumbSupplement from "../components/BreadcrumbSupplement"
import SidebarSupplement from "../components/SidebarSupplement"
// import ContentSupplement from "../components/ContentSupplement"
import { Redirect } from "react-router-dom";
import QuizSupplement from "../components/QuizSupplement"
import { Container, Row, Col } from "react-bootstrap"

import { connect } from "react-redux";
import {
    changeInput, doLogin, doLogout, doSignup
} from "../store/action/user"
import {
    getContent, getWeek
} from "../store/action/course"

class Supplement extends Component {
    componentDidMount = async () => {
        const paramsIdWeek = this.props.match.params.id
        await this.props.getContent()
        await this.props.getWeek(paramsIdWeek)
    }

    render() {
        const isLogin = localStorage.getItem("token")
        console.log("CEEKISLOGIN", isLogin)
        if (!isLogin) {
            return (
                <Redirect
                    to={{
                        pathname: "/",
                    }}
                />
            );
        }
        else {
            return (
                <React.Fragment>
                    <Header {...this.props} />
                    <BreadcrumbSupplement dataWeek={this.props.dataWeek} />
                    <Container fluid>
                        <Row>
                            <Col md={3} lg={3}>
                                <SidebarSupplement {...this.props} />
                            </Col>
                            <Col md={9} lg={9}>
                                <QuizSupplement />
                                {/* <ContentSupplement /> */}
                            </Col>
                        </Row>
                    </Container>
                </React.Fragment>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dataUser: state.user,
        dataCourse: state.course,
        dataSubmodul: state.course.submodul,
        dataWeek: state.course.week
    }
}

const mapDispatchToProps = {
    changeInput,
    doLogin,
    doLogout,
    doSignup,
    getContent,
    getWeek
}

export default connect(mapStateToProps, mapDispatchToProps)(Supplement)