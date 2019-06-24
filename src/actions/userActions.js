import Axios from "axios";
import { GET_USER } from ".";

export const getUser = () => {
    Axios.get('').then(res => {
        return{
            type: GET_USER,
            payload: res.data[0].fields
        }
    })
}