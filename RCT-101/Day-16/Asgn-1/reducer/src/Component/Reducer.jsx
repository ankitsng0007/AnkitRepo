export const Reducer=(state,action)=>{
    if(action.type==="IncrementCount"){
      return state +1;
    }
    if(action.type==="DecrementCount"){
      return state - 1;
    }
    if(action.type==="ResetCount"){
        return 0;
    }
      return state;
  }