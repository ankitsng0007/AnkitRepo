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




const useState = <A>(arg: A) : [A, (a: A ) => void ] => {
    let v: typeof arg = arg ;

    const setV = (newValue : A ): void => {
        v = newValue;
    };
    return [ v , setV ];
};

const [count , setCount] = useState(0);
const [value , setVaalue] = useState("");
const [form , setForm] = useState({id:0, name:"", email:"", password:""});