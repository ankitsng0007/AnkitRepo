export const Reducer=(state,action)=>{
  //  if(action.type==="IncrementCount"){
  //    return state +1;
  //  }
  //  if(action.type==="DecrementCount"){
//  return state - 1;
  //  }
  //  if(action.type==="ResetCount"){
   //     return 0;
  //  }
    //  return state;

    switch(action.type){
        case "IncrementCount": return state+1;
        case "DecrementCount": return state-1;
        case "ResetCount": return 0;
        case "IncrementCountValue": return state + action.payload;
        case "DecrementCountValue": return state + action.payload;
        default:
            return state;
    }
  }