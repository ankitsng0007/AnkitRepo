//generics
// a way of passing types to function along side parameters

//1. string | number | boolean
//2. any
//3. arg type is our output type

const getIdentity = <T>(arg: T ) : T => {
    return arg;
};

// Input type ?
// Output type ?
// A: Output type is related to input type
// One argument is related to other argument

let a : string ="Hello" ;
let b : number = 5 ;
let c : boolean = false;

getIdentity<string>(a);
getIdentity<number>(b);
getIdentity<boolean>(c);
getIdentity(undefined); //Error
getIdentity(null); //ok