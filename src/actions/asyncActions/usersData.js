import {fetchUserAction, fetchUsersListAction} from "../actionCreaters";
import axios from 'axios'

export const fetchUsersList = () => {
    return function (dispatch){
        axios.get("http://127.0.0.1:8000/api/v1/users/")
            .then(response => dispatch(fetchUsersListAction(response.data)))
            .catch(error => console.log(error))
    }
}




