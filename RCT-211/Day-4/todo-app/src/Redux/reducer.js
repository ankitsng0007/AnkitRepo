import * as types from "./actionTypes";

const initState={ count:20 }
const reducer =(oldState = initState,action)=>{
    const {type,payload}=action;
    
    switch(type){
        case types.ADD:
            return{...oldState, count: oldState.count+payload};
        case types.REDUCE:
            return{...oldState,count : oldState.count-payload};
        
            default:
            return oldState;
    }
};
export {reducer};