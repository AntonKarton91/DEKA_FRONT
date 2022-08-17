import React from 'react';
import '../table-field.css'
import ParticipantList from "../UI/participant-list/ParticipantList";
const TaskPreview = ({name, userList}) => {



    return (
        <div className='task-prev'>
            <div>
                {name.name}
            </div>
            <ParticipantList list={ name.participants } userList={userList}/>
        </div>
    );
};

export default TaskPreview;