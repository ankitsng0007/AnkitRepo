import React from "react";
import {Link ,Navigate,useSearchParams} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
const getData=(url)=>{
    return fetch(url).then((res)=>res.json());
}   
    const getCurrentPageFromUrl=(value)=>{
      value=Number(value);
      if(value==="number" && value<=0){
       value=1;
      }
      if(!value){
        value=1
      }
      return value;
    };
export const Users=()=>{
    const [data,setData] = React.useState();
    const [searchParams,setSearchParams] = useSearchParams();
    const initPage = getCurrentPageFromUrl(searchParams.get("page"))
    const [page,setPage] = React.useState(initPage);
    const [text,setText] = React.useState("");
    React.useEffect(()=>{
      getData(`https://reqres.in/api/users/?page=${page}`).then((res)=>{
        console.log(res);
        setData(res);
      })
    },[page])

    React.useEffect(()=>{
      setSearchParams({page,text})
    },[page,text])
    return(
        <>
        <h1>Users</h1>
        <input placeholder="Search" type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
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
