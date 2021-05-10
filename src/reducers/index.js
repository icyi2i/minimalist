import { combineReducers } from "redux";

import ListIndexReducer from "./ListIndexReducer";

const reduxion = combineReducers({
    lists : ListIndexReducer,
})

export default reduxion
