import Axios from "axios";
import { GET_USER } from ".";
export const getUserSuccess = (user) => {
    return {
        type: GET_USER,
        payload: user
    }
}
export const getUser = () => {
    return dispatch => {
    
    Axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + localStorage.getItem('token'),
        
    }
    return Axios.get('http://localhost:8000/users/profile/').then(res => {
        
        dispatch(getUserSuccess(res.data))
        
    })
   }
}