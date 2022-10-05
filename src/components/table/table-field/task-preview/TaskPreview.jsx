import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../../../styles/table-field.css';
import ParticipantList from "../../../UI1/participant-list/ParticipantList";
import MarkList from '../../../UI1/mark-list/MarkList';
import {
    changeTaskPositionAction,
    resetCartAction,
    setCartAction,
    taskPopupActivateAction,
    taskPopupDataAddAction
} from '../../../../actions/actionCreaters';
import DatePreviewComponent from "../../../UI1/date-preview/DatePreview.Component";
import {taskDetail} from "../../../../actions/asyncActions/listData";


const TaskPreview = ({taskListData, colID, DNDHandler}) => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const marks = useSelector(state => state.cartMarks)
    const {currentCart, targetCart} = useSelector(state => state.DND)

    function popupActivate() {
        let date
        if(taskListData.date){
            date = taskListData.date
        }else date = new Date()
        dispatch(taskDetail({...taskListData, date}))
        dispatch(taskPopupActivateAction({
            isActive: true,
            columnID: colID,
            taskID: taskListData.id,
        }))
    }


    function foo(curTaskPos, targTaskPos){
        dispatch(changeTaskPositionAction({curTaskPos, targTaskPos}))
    }

    function onDragStartHandler(e, currentCart) {
        currentCart.colID = colID
        dispatch(setCartAction({currentCart}))
    }

    function onDragLeaveHandler(e) {
        const elem = e.target.closest('.task-prev')
        elem.style.boxShadow = 'none'
    }

    function onDragOvertHandler(e) {
        e.preventDefault()
        if(e.target.closest('.task-prev')) {
            const elem = e.target.closest('.task-prev')
            elem.style.boxShadow = '0 4px 3px gray'
        }
    }

    function onDragEndHandler(e) {
        foo(currentCart, targetCart)
        dispatch(resetCartAction())

    }

    function dropHandler(e, targetCart) {
        targetCart.colID = colID
        dispatch(setCartAction({targetCart}))
    }

    return (
        <div className='task-prev'
             pos={taskListData.taskPosition}
             onDragStart={(e) => onDragStartHandler(e, taskListData)}
             onDragLeave={(e) => onDragLeaveHandler(e)}
             onDragOver={(e) => onDragOvertHandler(e)}
             onDragEnd={(e) => onDragEndHandler(e)}
             onDrop={e => dropHandler(e, taskListData)}
             draggable={true}
             onClick={() => popupActivate()}>

            <MarkList markList={ marks } list={ taskListData.marks }/>
            <div>
                {taskListData.name}
            </div>
            <div className={'prev-options__container'}>

                <DatePreviewComponent date={ taskListData.date }/>
                <ParticipantList columnID={ taskListData.id }
                                 list={ taskListData.participants }
                                 allUserList={users}/>
            </div>
        </div>
    );
};

export default TaskPreview;