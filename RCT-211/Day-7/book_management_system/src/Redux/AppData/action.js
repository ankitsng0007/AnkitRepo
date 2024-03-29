import * as types from "./actionTypes";
import axios from "axios";

const getBookRequest=()=>{
    return{
        type: types.GET_BOOKS_REQEST
    }
}
const getBookSuccess=(payload)=>{
    return{
        type: types.GET_BOOKS_SUCCESS,
        payload
    }
}
const getBookError=()=>{
    return{
        type: types.GET_BOOKS_ERROR
    }
};
const getBooks = (params)=>
    (dispatch)=>{
        dispatch(getBookRequest());
        return axios.get("http://localhost:8080/books",params)
        .then((r)=>{
            dispatch(getBookSuccess(r.data));
        })
        .catch((e)=>{
            dispatch(getBookError());
        });
    };

    //patch
    //{id:2, book_name:"Modified Book Name"}
export {getBooks};