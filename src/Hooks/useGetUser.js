import {useSelector} from "react-redux";

export const useGetUser = (id) => {
    let userList = useSelector(state => state.users)
    let user
    userList.forEach(u => {
            if (u.id === id) {
                user = u
            }
        })
    return user
}