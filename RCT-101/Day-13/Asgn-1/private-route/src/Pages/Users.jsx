import React from "react";
import {Link ,Navigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
const getData=(url)=>{
    return fetch(url).then((res)=>res.json());
}
export const Users=()=>{
    const [data,setData] = React.useState();
    React.useEffect(()=>{
      getData(`https://reqres.in/api/users/?page=1`).then((res)=>{
        console.log(res);
        setData(res);
      })
    },[])
    return(
        <>
        <h1>Users</h1>
        <ul>
            {data && data.data && data.data.map((el)=>
            <div key={el.id} style={{display:"flex",flexDirection:"column",alignItems:"centre"}}>
              <img src={el.avatar} alt="profile-pic" style={{width:"40%",margin:"auto"}}/>
              <Link to={`/users/${el.id}`}>More Detail</Link>
            </div>)}
        </ul>
        </>
    );
};
