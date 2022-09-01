import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './mark-list.module.css'
import './mark-list.css'
const MarkList = ({markList, list}) => {
    const dispatch = useDispatch()
    // const users = useSelector(state => state.users)

    function getSortedList(){
        return markList.sort((a,b)=>{
            if(a.title.length<b.title.length){
                return -1
            }else if(a.title.length>b.title.length){
                return 1
            }
            return 0
            })
        }

    function getColor(mark){
        return ('mark_' + mark.color)

    }
    // const a = getColor()

    

    return (
            <div className='mark_list'>
                {getSortedList().map(item => {
                if(list.includes(item.id)){
                    return <div className={`mark ${getColor(item)}`} key={item.id}>{ item.title }</div>
                }
                })}
            </div>
    );
};

export default MarkList;