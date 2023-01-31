import React from "react";
import {Link ,Navigate,useSearchParams} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
const getData=(url)=>{
    return fetch(url).then((res)=>res.json());
}
export const Users=()=>{
    const [data,setData] = React.useState();
    const [page,setPage] = React.useState(1);
    const [searchParams,setSearchParams] = useSearchParams();
    React.useEffect(()=>{
      getData(`https://reqres.in/api/users/?page=${page}`).then((res)=>{
        console.log(res);
        setData(res);
      })
    },[page])

    React.useEffect(()=>{
      setSearchParams({page})
    },[page])
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
        <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        <button>{page}</button>
        <button disabled={page===2} onClick={()=>setPage(page+1)}>Next</button>
        </>
    );
};
