import React from "react";

const getData=(url)=>{
    return fetch(url).then((res)=>res.json());
}
export const Users =()=>{
    const [data,setData]=React.useState({});
    React.useEffect(()=>{
        getData(`https://reqres.in/api/users/?page=2`).then((res)=>{
            console.log(res);
        })
    },[])
    return(
    <h1>Users</h1>
    )
}