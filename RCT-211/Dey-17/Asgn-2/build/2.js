//generics
// a way of passing types to function along side parameters
//1. string | number | boolean
//2. any
//3. arg type is our output type
const getIdentity = (arg) => {
    return arg;
};
// Input type ?
// Output type ?
// A: Output type is related to input type
// One argument is related to other argument
let a = "Hello";
let b = 5;
let c = false;
getIdentity(a);
getIdentity(b);
getIdentity(c);
getIdentity(undefined); //Error
getIdentity(null); //ok
const useState = (arg) => {
    let v = arg;
    const setV = (newValue) => {
        v = newValue;
    };
    return [v, setV];
};
const [count, setCount] = useState(0);
const [value, setVaalue] = useState("");
const [form, setForm] = useState({ id: 0, name: "", email: "", password: "" });
