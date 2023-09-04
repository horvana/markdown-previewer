//combine multiple reducers

import { combineReducers } from "redux";
import textInputReducer from './textInput'

const rootReducer = combineReducers({
    textInput: textInputReducer
})

export default rootReducer;