import {combineReducers} from "redux";
import { cartMarksReducer } from "./cartMarksReducer";
import { taskPopupReducer } from "./taskPopupReducer";
import { userReducer } from "./usersReducer";
import {calendarReducer} from "./calendarReducer";
import AuthReducer from "./AuthReducer";
import {ColumnReducer} from "./ColumnReducer";
import {TaskDetailReducer} from "./TaskDetailReducer";


export const rootReducer = combineReducers({
    taskDetail: TaskDetailReducer,
    list: ColumnReducer,
    users: userReducer,
    cartMarks: cartMarksReducer,
    task: taskPopupReducer,
    calendar: calendarReducer,
    Auth: AuthReducer,
})