import * as types from "./actionTypes";

const getBookRequest=()=>{
    return{
        type: types.GET_BOOKS_REQEST
    }
}
const getBookSuccess=()=>{
    return{
        type: types.GET_BOOKS_SUCCESS
    }
}
const getBookError=()=>{
    return{
        type: types.GET_BOOKS_ERROR
    }
}