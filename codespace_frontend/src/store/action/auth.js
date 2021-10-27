import axios from '../../axios/axios-local'
import { userGet } from './user'
import * as actionTypes from './actionTypes';
import exp from 'constants';
const querystring = require('querystring');

export const auth = (userName, password) => {

    const param = {
        username: userName,
        password: password
    }
    //send params instead of payload
    

    //test
   
    return (dispatch) => {
        dispatch(authStart())
        if(userName==="admin" && password==="123"){
            dispatch(authAdminSuccess());

        }else if(userName==="demo1" && password==="123"){
            dispatch(authUserSuccess());
        }
        else{
            dispatch(authFail("Invalid credentials"));
        }
    }
    //----------------------
    // return (dispatch) => {
    //     dispatch(authStart());
    //     axios.post('/login', querystring.stringify(param))
    //         .then(response => {
                
    //             let token = response.headers["token"];
    //             if (token !== undefined) {
    //                 localStorage.setItem('timesheettoken',token);
    //                 dispatch(authSuccess());
    //                 dispatch(userGet(param.username,token));
    //             }else{
    //                 dispatch(authFail(response.data));
    //             }
    //         });
    //     return Promise.resolve();

    // }
}
export const refresh =() =>{
     return (dispatch) =>{
         dispatch(authStart())
     }
}
export const reg =(userName, password) =>{
    const param = {
        username: userName,
        password: password
    }
    return (dispatch)=>{
        dispatch(authStart())
    // if(userName==="admin" && password==="123"){
    //     dispatch(authAdminSuccess());
    // }


     //     axios.post('/login', querystring.stringify(param))
    //         .then(response => {
                
    //             let token = response.headers["token"];
    //             if (token !== undefined) {
    //                 localStorage.setItem('timesheettoken',token);
    //                 dispatch(authSuccess());
    //                 dispatch(userGet(param.username,token));
    //             }else{
    //                 dispatch(authFail(response.data));
    //             }
    //         });
    //     return Promise.resolve();

    // }
     if(userName==="demo1" && password==="123"){
        dispatch(regUserSuccess("Registered!! Login Now"));
    }
    else{
        dispatch(regFail("User Exists try different username"));
    }
     }
    };

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authAdminSuccess = () => {
    return {
        type: actionTypes.AUTH_ADMINSUCCESS,
    }
}

export const authUserSuccess = () => {
    return {
        type: actionTypes.AUTH_USERSUCCESS,
    }
}
export const regUserSuccess = (msg) => {
    return {
        type: actionTypes.REG_USERSUCCESS,
        loginMsg: msg
    }
}
export const authFail = (loginError)=>{
    return{
        type:actionTypes.AUTH_FAIL,
        loginError:loginError
    }
}

export const regFail = (regError)=>{
    return{
        type:actionTypes.REG_FAIL,
        loginError:regError
    }
}
export const authLogout = () => {
    localStorage.removeItem('timesheettoken');
    localStorage.removeItem('timesheetUsername');
    localStorage.removeItem('timesheetisAuthenticated');
    localStorage.removeItem('timesheetuseremail');
    localStorage.removeItem('timesheeticonName');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authLoading = ()=>{
    return{
        type:actionTypes.AUTH_LOADING,
    }
}

