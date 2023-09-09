import { combineReducers } from "redux"
import bugsReducer from "./bug"
import projectsReducer from "./project"


//combine multiple reducers to single reducer
export default combineReducers({
    bug:bugsReducer,
    projects:projectsReducer
})