export function getParts (list, enterColID, enterTaskID) {

    const column = list.find(col => col.id === enterColID)
    const task = column.taskList.find(task => task.id === enterTaskID)
    return task.participants
}

export function getTask(enterColID, enterTaskID, list){
    const column = list.find(col => col.id === enterColID)
    return column.taskList.find(task => task.id === enterTaskID)
}

export function getSortedList(markList){
    return markList.sort((a,b)=>{
        if(a.title.length<b.title.length){
            return -1
        }else if(a.title.length>b.title.length){
            return 1
        }
        return 0
    })
}

export const getUser = (users, ID) => {
    return users.find(user => user.id === ID)
}