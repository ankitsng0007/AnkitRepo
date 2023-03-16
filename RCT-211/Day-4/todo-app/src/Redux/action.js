import * as types from "./actionTypes";

const handleAdd = (payload) => {
    return{
        type : types.ADD,
        payload
    }
};
const handleReduce = (payload) => {
    return{
        type:types.REDUCE,
        payload
    }
};
const getTodosRequest=()=>{
    return{
        type:types.GET_TODOS_REQUEST,
    }
};
const getTodosSuccess=(payload)=>{
    return{
        type:types.GET_TODOS_SUCCESS,
        payload,
    }
};
const getTodosError=()=>{
    return{
        type:types.GET_TODOS_ERROR,
    }
}
export {handleAdd,handleReduce,getTodosRequest,getTodosSuccess,getTodosError}