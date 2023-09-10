import { combineReducers } from "redux"
import bugsReducer from "./bug"
import projectsReducer from "./project"
import userReducer from "./user"


//combine multiple reducers to single reducer
export default combineReducers({
    bug:bugsReducer,
    projects:projectsReducer,
    user:userReducer
})