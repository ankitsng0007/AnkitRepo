import * as types from "./actionTypes";
const loginRequest=()=>{
    return{
        type:types.USER_LOGIN_REQUEST,
    };
};
const loginSuccess=()=>{
    return{
        type:types.USER_LOGIN_SUCCESS,
    };
};
const loginError=()=>{
    return{
        type:types.USER_LOGIN_ERROR,
    };
};
export {loginRequest,loginSuccess,loginError}