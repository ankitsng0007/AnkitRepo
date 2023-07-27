//generics
// a way of passing types to function along side parameters

//1. string | number | boolean
//2. any
//3. arg type is our output type

const getIdentity = (arg: string | number | boolean) : any => {
    return arg;
};