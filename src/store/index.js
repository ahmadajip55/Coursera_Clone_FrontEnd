import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import userReducer from "./reducer/user";
import courseReducer from "./reducer/course"

const rootReducer = combineReducers({
    user: userReducer,
    course: courseReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.warn("cek store", store.getState()));

export default store;