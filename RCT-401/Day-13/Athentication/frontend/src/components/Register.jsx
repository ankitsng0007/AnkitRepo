import { useState } from "react"

const Register = ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [age,setAge] = useState("");

    return(
    <div>
        <h2>Registration Page</h2>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <input type="number" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <button>Submit</button>
    </div>
    )
}

export {Register}