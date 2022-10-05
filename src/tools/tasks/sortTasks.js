export function sortTasks(a,b) {
    if (a.taskPosition>b.taskPosition) {
        return 1
    }else { return -1}
}