import React, { Component } from "react"
import { Redirect } from "react-router-dom";
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import CardIntro from "../components/CardIntro"
import AccordionWeek from "../components/AccordionWeek"

import { connect } from "react-redux";
import {
    changeInput, doLogin, doLogout, doSignup
} from "../store/action/user"
import {
    getCourse
} from "../store/action/course"

class Welcome extends Component {
    componentDidMount = async () => {
        const paramsIdCourse = await this.props.match.params.id
        this.props.getCourse(paramsIdCourse)
    }

    // handleRequestToSupplement = async (id) => {
    //     await this.props.history.replace("/supplement" + id)
    // }

    render() {
        const isLogin = localStorage.getItem("token")
        console.log("CEEKPROPSWELCOME", this.props)
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
                    <Sidebar {...this.props} />
                    <div class="content">
                        <div className="course">
                            <h2 className="nameCourse">Introduction to Geology</h2>
                            <span>by Yale University</span>
                        </div>
                        <CardIntro />
                        <AccordionWeek {...this.props} />
                    </div>
                </React.Fragment>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dataUser: state.user,
        dataCourse: state.course
    }
}

const mapDispatchToProps = {
    changeInput,
    doLogin,
    doLogout,
    doSignup,
    getCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)