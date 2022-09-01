import React, {useState} from 'react';
// import ParticipantLogo from "../participant-logo/ParticipantLogo";
import classes from './participant-list.module.css';


const ParticipantList = ({list, allUserList}) => {

    function List() {
       return allUserList.map(item => {
        if(list.includes(item.id)){
            return <div >
                <img className={classes.part_icon} src={item.url} alt="" key={item.id}/>
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