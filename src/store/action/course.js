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

export const getWeek = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://0.0.0.0:5000/week/" + id)
            dispatch({ type: "GET_WEEK", payload: response.data })
        } catch (error) {
            alert("error")
        }
    }
}

export const getContent = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://0.0.0.0:5000/submodul")
            dispatch({ type: "GET_SUBMODUL", payload: response.data })
        } catch (error) {
            alert("error")
        }
    }
}