import * as types from "./actionTypes";

const initState = {
    books:[],
    isLoading:false,
    isError:false,
}
const reducer = (oldState=initState,action)=>{
    const {type,payload} = action;
    switch(type){
        case types.GET_BOOKS_REQEST:
            return {...oldState,isLoading:true };
        case types.GET_BOOKS_SUCCESS:
            return {...oldState,isLoading:false,books:payload };
        case types.GET_BOOKS_ERROR:
            return {...oldState,isLoading:false,isError:true };
        default:
            return oldState;
    }
};
export {reducer};