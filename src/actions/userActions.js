import Axios from "axios";
import { GET_USER } from ".";
import * as settings from '../settings'
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
        Authorization: `${settings.TOKEN} ` + localStorage.getItem('token'),
        
    }
    return Axios.get(`${settings.DOMAIN}/api/identity/`).then(res => {
        console.log(res.data)
        dispatch(getUserSuccess(res.data))
        
    })
   }
}