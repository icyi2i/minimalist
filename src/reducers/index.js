import { combineReducers } from "redux";

import ListReducer from "./ListReducer";

const reduxion = combineReducers({
    lists : ListReducer,
})

export default reduxion
