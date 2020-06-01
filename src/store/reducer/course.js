const initialState = {
    course: ""
}

export default function courseReducer(courseState = initialState, action) {
    switch (action.type) {
        case "GET_COURSE":
            return {
                ...courseState,
                course: action.payload
            }
        default:
            return courseState
    }
}