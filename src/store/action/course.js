import axios from "axios"

export const getCourse = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://0.0.0.0:5000/content/category", {
                params: {
                    course_id: id
                }
            })
            localStorage.setItem("test", "ajay")
            dispatch({ type: "GET_COURSE", payload: response.data })
        }
        catch (error) {
            alert("error")
        }
    }
}