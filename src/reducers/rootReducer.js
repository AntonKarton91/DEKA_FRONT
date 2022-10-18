import {combineReducers} from "redux";
import { cartMarksReducer } from "./cartMarksReducer";
import {listReducer} from "./listReducer";
import { taskPopupReducer } from "./taskPopupReducer";
import { userReducer } from "./usersReducer";
import {calendarReducer} from "./calendarReducer";
import {DNDReducer} from "./DNDReducer";
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
    DND: DNDReducer,
    Auth: AuthReducer,

})