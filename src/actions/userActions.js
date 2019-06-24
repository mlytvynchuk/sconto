import Axios from "axios";
import { GET_USER } from ".";

export const getUser = () => {
    console.log(localStorage.getItem('token'));
    Axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + localStorage.getItem('token'),
        
    }
    Axios.get('http://localhost:8000/users/profile/').then(res => {
        console.log(res.data);
        return{
            type: GET_USER,
            payload: res.data
        }
    })
}