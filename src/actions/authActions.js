import * as actionTypes from './index'
import axios from 'axios'
import * as settings from '../settings'
import { compose } from 'redux';
export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = (error) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return dispatch => {
        dispatch(authSuccess(null));
        return{
        type: actionTypes.AUTH_LOGOUT,
        }
    }

    
}
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}
export const authLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.defaults.headers = {
            'Content-Type': 'application/json; charset=UTF-8'
        }
        return axios.post(`${settings.DOMAIN}/api/login/`,{
            email: email,
            password: password
        })
        .then(res => {
            const token = res.data.access_token;
            alert(token);
            const expirationDate = new Date(new Date().getTime() + 36000 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(36000));
        })
        .catch(err => {
            dispatch(authFail(err));
        });
    }
}
export const getUserSuccess = (user) => {
    return{
        type: actionTypes.GET_USER,
        payload: user
    }
}
export const getUser = () => {
    axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `${settings.TOKEN} ` + localStorage.getItem('token')
    }
    return dispatch => {
        return axios.get(`${settings.DOMAIN}/api/identity/`)
        .then(
            res => {
                // let user = res.data.access_token;
                console.log(res.data.id);
                // localStorage.setItem('user', res.data.access_token)
                // dispatch(getUserSuccess(user));
                
            }
        );
    }
    
    
    
}
export const authSignup = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        return axios.post(`${settings.DOMAIN}/api/register/`,{
            email: email,
            password: password,
        })
        .then(res => {
            const token = res.data.access_token;
            alert(token);
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(36000));
        })
        .catch(err => {
            dispatch(authFail(err));
        });
    }
}

export const authCheckState = () =>{
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === null){
            console.log('token is null')
            dispatch(logout());
            return false;
        }
        else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()){   
                dispatch(logout());
            }
            else{
                
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
                return true;
            }
        }
        console.log(token)
    }
}