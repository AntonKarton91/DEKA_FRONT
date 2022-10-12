export const getUser = (id, userList) => {
    let user
    userList.forEach(u => {
            if (u.id === Number(id)) {
                user = u
            }
        })
    return user
}