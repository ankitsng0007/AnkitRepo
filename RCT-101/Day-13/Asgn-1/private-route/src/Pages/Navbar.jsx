import {NavLink} from "react-router-dom";

const links=[
    {path:"/",title:"Home"},
    {path:"/users",title:"Users"},
    {path:"/contact",title:"Contact"}
];
export const Navbar=()=>{
    return(<div style={{display:"flex",justifyContent:"space-around"}}>{
        links.map((el)=>(
            <NavLink 
            style={({isActive})=>{
                return isActive? {color:"red"}:{color:"black"}
            }} 
            to={el.path}>{el.title}</NavLink>
        ))
    }</div>
    )
}