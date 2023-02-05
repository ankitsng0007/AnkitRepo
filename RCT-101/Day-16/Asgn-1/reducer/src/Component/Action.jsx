
export const IncAction = {type:"IncrementCount"};

export const DecAction = {type:"DecrementCount"};
export const ResetAction = {type:"ResetCount"};

export const IncrementByValue=(value)=>{
    return{
    type:"IncrementCountValue",
    payload:value
    }
}
export const DecrementByValue=(value)=> ({
        type:"DecrementCountValue",
        payload:value
}
)