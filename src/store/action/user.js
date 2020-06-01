import axios from "axios"

export const changeInput = (e) => {
    return {
        type: "CHANGE_INPUT",
        payload: e
    }
}

export const doLogin = () => {
    return async (dispatch, getState) => {
        const userName = getState().user.userName
        const pin = getState().user.pin
        if (userName !== "" & pin !== "") {
            try {
                const response = await axios.post("http://0.0.0.0:5000/auth", {
                    username: userName,
                    pin: pin
                })
                await localStorage.setItem("token", response.data.token)
                dispatch({ type: "DO_LOGIN", payload: response.data })
            }
            catch (error) {
                alert("Username and Pin not registered")
            }
        }
        else if (userName === "") {
            alert("Username is empty")
        }
        else if (pin === "") {
            alert("Pin is empty")
        }
    }
}

export const doSignup = () => {
    return async (dispatch, getState) => {
        const fullName = getState().user.fullName
        const userName = getState().user.userName
        const pin = getState().user.pin
        if (fullName !== "" & userName !== "" & pin !== "") {
            try {
                const response = await axios.post("http://0.0.0.0:5000/user", {
                    username: userName,
                    full_name: fullName,
                    pin: pin
                })
                await localStorage.setItem("token", response.data.token)
                dispatch({ type: "DO_SIGNUP", payload: response.data })
            }
            catch (error) {
                alert("error")
            }
        }
        else if (fullName === "") {
            alert("Fullname is empty")
        }
        else if (userName === "") {
            alert("Username is empty")
        }
        else if (pin === "") {
            alert("Pin is empty")
        }
    }
}

export const doLogout = () => {
    localStorage.removeItem("token")
    return {
        type: "DO_LOGOUT"
    }
}