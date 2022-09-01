import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../table-field.css';
import ParticipantList from "../UI/participant-list/ParticipantList";
import MarkList from '../UI/mark-list/MarkList';
import { taskPopupActivateAction, taskPopupDataAddAction } from '../../../../actions/actionCreaters';

const TaskPreview = ({taskListData, userList, colID}) => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const marks = useSelector(state => state.cartMarks)


    
    function popupActivate() {
        dispatch(taskPopupDataAddAction(taskListData))
        dispatch(taskPopupActivateAction({
            isActive: true,
            columnID: colID,
            taskID: taskListData.id,
        }))
    }

    return (
        <div className='task-prev' onClick={() => popupActivate()}>
            <MarkList markList={ marks } list={ taskListData.marks }/>
            <div>
                {taskListData.name}
            </div>
            <ParticipantList columnID={ taskListData.id } list={ taskListData.participants } allUserList={users}/>
        </div>
    );
};

export default TaskPreview;