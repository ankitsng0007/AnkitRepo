import * as types from "./actionTypes";

const initState={ count:20, todos:[], isLoading:false, isError:false }

const reducer =(oldState = initState,action)=>{
    const {type,payload}=action;
    
    switch(type){
        case types.ADD:
            return{...oldState, count: oldState.count+payload};
        case types.REDUCE:
            return{...oldState,count : oldState.count-payload};
        case types.GET_TODOS_REQUEST:
            return{...oldState,isLoading:true };
        case types.GET_TODOS_SUCCESS:
            return{...oldState,isLoading:false,todos:payload };
        case types.GET_TODOS_ERROR:
            return{...oldState,isLoading:false,isError:true };

            default:
            return oldState;
    }
};
export {reducer};