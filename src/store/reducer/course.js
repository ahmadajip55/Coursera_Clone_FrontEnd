const initialState = {
    course: "",
    content: "",
    week: ""
}

export default function courseReducer(courseState = initialState, action) {
    switch (action.type) {
        case "GET_COURSE":
            return {
                ...courseState,
                course: action.payload
            }
        case "GET_WEEK":
            return {
                ...courseState,
                week: action.payload
            }
        case "GET_SUBMODUL":
            return {
                ...courseState,
                submodul: action.payload
            }
        default:
            return courseState
    }
}