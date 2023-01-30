import React from "react";
import {Link} from "react-router-dom";

const getData=(url)=>{
    return fetch(url).then((res)=>res.json());
}
export const Users =()=>{
    const [data,setData]=React.useState({});
    React.useEffect(()=>{
        getData(`https://reqres.in/api/users/?page=2`).then((res)=>{
            console.log(res);
            setData(res);
            console.log(data)
        })
    },[])
    return(
        <>
    <h1>Users</h1>
    <ul>
    {data && data.data && data.data.map((el)=>
        <li>
            <Link to={`/users/${el.id}`}>{el.first_name}</Link>
            </li>
    )}
    </ul>
    </>
    )
}