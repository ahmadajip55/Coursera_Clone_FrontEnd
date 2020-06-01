const initialState = {
    userName: "",
    fullName: "",
    pin: "",
    token: ""
}

export default function userReducer(userState = initialState, action) {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...userState,
                [action.payload.target.name]: action.payload.target.value
            }
        case "DO_LOGIN":
            return {
                ...userState,
                token: action.payload.token
            }
        case "DO_SIGNUP":
            return {
                ...userState,
                token: action.payload.token
            }
        case "DO_LOGOUT":
            return {
                ...userState,
            }
        default:
            return userState
    }
}