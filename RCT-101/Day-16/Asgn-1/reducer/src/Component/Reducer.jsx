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
        case "IncrementCount": return {
          ...state, count : state.count+1 };
        case "DecrementCount": return {
          ...state, count:state.count-1};
        case "ResetCount": return {...state, count:0};
        case "IncrementCountValue": return {
          ...state,count : state.count + action.payload};
        case "DecrementCountValue": return {
          ...state, count : state.count - action.payload};
        default:
            return state;
    }
  }