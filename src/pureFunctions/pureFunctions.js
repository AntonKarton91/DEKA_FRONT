export function getParts (list, enterColID, enterTaskID) {

    const column = list.find(col => col.id === enterColID)
    const task = column.taskList.find(task => task.id === enterTaskID)
    console.log(task)
    return task.participants
}