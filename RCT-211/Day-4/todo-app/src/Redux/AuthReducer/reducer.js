import * as types from "./actionTypes";

const initState={
    isAuth:false,
    token:"",
    isAuthLoading:false,
    isAuthError:false
}
const reducer=( oldState=initState,action )=>{
    const {type,payload}=action;
    switch(type){
        case types.USER_LOGIN_REQUEST:
            return{
                ...oldState,
                isAuthLoading:true
            };
        case types.USER_LOGIN_SUCCESS:
            return{
                ...oldState,
                isAuthLoading:false,
                isAuth:true,
                token:payload
            };
        case types.USER_LOGIN_ERROR:
            return{
                ...oldState,
                isAuthLoading:false,
                isAuth:false,
                isAuthError:true
            };
            default:
                return oldState;
    }
}
export {reducer};