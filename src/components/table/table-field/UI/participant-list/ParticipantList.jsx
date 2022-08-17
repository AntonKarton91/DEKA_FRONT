import React, {useState} from 'react';
import ParticipantLogo from "../participant-logo/ParticipantLogo";

const ParticipantList = ({list, userList}) => {



    function List() {
        return list.map(part=>{

           const a = userList.find(item =>item.id === part.id)
            console.log(part.id, a.url )
           return <ParticipantLogo alt={ part.id } url={ a.url }/>
        })
    }

    return (
        <div>
            <List/>
        </div>
    );
};

export default ParticipantList;