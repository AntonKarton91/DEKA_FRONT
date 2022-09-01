import {combineReducers} from "redux";
import { cartMarksReducer } from "./cartMarksReducer";
import {listReducer} from "./listReducer";
import { taskPopupReducer } from "./taskPopupReducer";
import { userReducer } from "./usersReducer";


export const rootReducer = combineReducers({
    list: listReducer,
    users: userReducer,
    cartMarks: cartMarksReducer,
    taskPopup: taskPopupReducer,
})