import {
    ADD_COLUMN,
    ADD_MARK_TO_TASK,
    ADD_PART_TO_POPUP,
    ADD_PARTICIPANT_TO_TASK,
    ADD_TASK_TO_COLUMN,
    CHANGE_MONTH,
    CHANGE_TASK_DATE,
    CHANGE_TASK_POSITION,
    FETCH_DATA_TO_LIST,
    FETCH_MARK_LIST,
    FETCH_USER,
    FETCH_USER_DATA,
    FETCH_USERS_LIST,
    LOGIN_USER,
    REFRESH_TOKEN,
    RESET_CART,
    SET_CART,
    SET_DATE_TO_TASK,
    SHOW_DATE_FORM,
    SHOW_MARK_ADD_FORM,
    SHOW_PART_ADD_FORM,
    TASK_POPUP_ACTIVATION,
    TASK_POPUP_COMMENT_ADD,
    TASK_POPUP_DATA_ADD, TASK_POPUP_DATA_EDIT,
    TASK_POPUP_DATE_CHANGE
} from "./types";


export const fetchUsersListAction = (payload) => {
    return {type: FETCH_USERS_LIST, payload}
}
export const fetchUserDataAction = (payload) => {
    return {type: FETCH_USER_DATA, payload}
}
export const fetchMarksListAction = (payload) => {
    return {type: FETCH_MARK_LIST, payload}
}



export const addColumnAction = (payload) => {
    return {type: ADD_COLUMN, payload}
}




export const taskPopupActivateAction = (payload) => {
    return {type: TASK_POPUP_ACTIVATION, payload}
}

export const taskPopupDataAddAction = (payload) => {
    return {type: TASK_POPUP_DATA_ADD, payload}
}


export const showPartAddFormAction = (payload) => {
    return {type: SHOW_PART_ADD_FORM, payload}
}

export const addParticipantToList = (payload) => {
    return {type: ADD_PARTICIPANT_TO_TASK, payload}
}

export const appPartToPopupAction = (payload) => {
    return {type: ADD_PART_TO_POPUP, payload}
}
export const showMarkAddFormAction = (payload) => {
    return {type: SHOW_MARK_ADD_FORM, payload}
}
export const showCalendarAction = (payload) => {
    return {type: SHOW_DATE_FORM, payload}
}
export const addMarkToList = (payload) => {
    return {type: ADD_MARK_TO_TASK, payload}
}
export const setDateToListAction = (payload) => {
    return {type: SET_DATE_TO_TASK, payload}
}

export const taskPopupDateChangeAction = (payload) => {
    return {type: TASK_POPUP_DATE_CHANGE, payload}
}

export const putNewCommentAction = (payload) => {
    return {type: TASK_POPUP_COMMENT_ADD, payload}
}




export const changeTaskDateAction = (payload) => {
    return {type: CHANGE_TASK_DATE, payload}
}
export const changeMonthAction = (payload) => {
    return {type: CHANGE_MONTH, payload}
}

export const setCartAction = (payload) => {
    return {type: SET_CART, payload}
}
export const resetCartAction = (payload) => {
    return {type: RESET_CART, payload}
}

export const changeTaskPositionAction = (payload) => {
    return {type: CHANGE_TASK_POSITION, payload}
}


export const loginUserAction = (payload) => {
    return {type: LOGIN_USER, payload}
}
export const refreshTokenAction = (payload) => {
    return {type: REFRESH_TOKEN, payload}
}




