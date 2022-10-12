import React from 'react';
import classes from './participant-list.module.css';
import {useSelector} from "react-redux";


const ParticipantList = ({list, allUserList}) => {
    const userData = useSelector(state => state.users)
    function List() {
       return userData.map(item => {
        if(list.includes(item.id)){
            return <div key={item.id}>
                <img className={classes.part_icon} src={item.ava} alt="" key={item.id}/>
                </div>
        }
       })
    }

    return (
        <div className={classes.list}>
            
            <List/>
        </div>
    );
};

export default ParticipantList;