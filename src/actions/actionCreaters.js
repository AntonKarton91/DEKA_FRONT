import {
    ADD_COLUMN,
    ADD_COORD_FORM, ADD_PART_TO_POPUP,
    ADD_PARTICIPANT_TO_TASK,
    ADD_TASK_TO_COLUMN,
    SHOW_PART_ADD_FORM,
    TASK_POPUP_ACTIVATION,
    TASK_POPUP_DATA_ADD
} from "./types";

export const addColumnAction = (payload) => {
    return {type: ADD_COLUMN, payload}
}


export const addTaskToColumnAction = (payload) => {
    return {type: ADD_TASK_TO_COLUMN, payload}
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

