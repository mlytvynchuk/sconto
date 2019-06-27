import * as actionTypes from './index'
import axios from 'axios'
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

    return{
        type: actionTypes.AUTH_LOGOUT,
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
        return axios.post('http://localhost:8000/rest-auth/login/',{
            email: email,
            password: password
        })
        .then(res => {
            const token = res.data.key;
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
        Authorization: 'Token ' + localStorage.getItem('token')
    }
    return dispatch => {
        return axios.get('http://localhost:8000/users/profile/')
        .then(
            res => {
                localStorage.setItem('user', res.data[0].fields)
                let user = res.data[0].fields;
                dispatch(getUserSuccess(user));
                
            }
        );
    }
    
    
    
}
export const authSignup = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        return axios.post('http://localhost:8000/usercreate/',{
            email: email,
            password: password,
        })
        .then(res => {
            const token = res.data.key;
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
            dispatch(logout());
        }
        else{
            
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()){
                
                dispatch(logout());
            }
            else{
                
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
                
            }
        }
    }
}