import React, { Component } from "react"
import Header from "../components/Header"
import JumbotronEnroll from "../components/JumbotronEnroll"

import { connect } from "react-redux";
import {
    changeInput, doLogin, doLogout, doSignup
} from "../store/action/user"
import {
    getCourse
} from "../store/action/course"

class Home extends Component {
    handleRequestToWelcome = async () => {
        const isLogin = localStorage.getItem("token")
        if (isLogin) {
            await this.props.history.replace("/welcome/1")
        }
        else {
            alert("Login First !")
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header {...this.props} />
                <JumbotronEnroll handleRequestToWelcome={() => this.handleRequestToWelcome()} />
            </React.Fragment>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)