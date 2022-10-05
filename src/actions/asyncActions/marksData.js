import {fetchMarksListAction} from "../actionCreaters";
import axios from 'axios'

export const fetchMarksList = () => {
    return function (dispatch){
        axios.get("http://127.0.0.1:8000/api/v1/marks/")
            .then(response => dispatch(fetchMarksListAction(response.data)))
            .catch(error => console.log(error))
    }
}