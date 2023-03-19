import * as types from "./actionTypes";

const initState={
    isAuth:false,
    token:"",
    isAuthLoading:false,
    isAuthError:false
}
const reducer=( oldState=initState,action )=>{
    const {type,payload}=action;
}