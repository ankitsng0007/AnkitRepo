import * as types from "./actionTypes";

const initState={ todos:[], isLoading:false, isError:false }

const reducer =(oldState = initState,action)=>{
    const {type,payload}=action;
    
    switch(type){
        case types.GET_TODOS_REQUEST:
            return{...oldState,isLoading:true };
        case types.GET_TODOS_SUCCESS:
            return{...oldState,isLoading:false,todos:payload };
        case types.GET_TODOS_ERROR:
            return{...oldState,isLoading:false,isError:true };

        case types.POST_TODOS_REQUEST:
            return{...oldState,isLoading:true,};
        case types.POST_TODOS_SUCCESS:
            return{...oldState,isLoading:false,todos:payload};
        case types.POST_TODOS_ERROR:
            return{...oldState,isLoading:false}
            default:
            return oldState;
    }
};
export {reducer};