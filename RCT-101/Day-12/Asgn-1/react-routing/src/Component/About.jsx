import { Navigate, useNavigate } from "react-router-dom"

export function About(){
    const navigate = useNavigate();
    return(
        <div>
        <h3>I am the Best.</h3>
        <h2>Thank You</h2>
        <button onClick={()=>{
            navigate("/product/laptop")
        }}>Submit</button>
        </div>
    )
}