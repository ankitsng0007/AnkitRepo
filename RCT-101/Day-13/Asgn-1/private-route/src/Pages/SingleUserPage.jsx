import React from "react";
import {useParams} from "react-router-dom";

const getData=(url)=>{
    return fetch(url).then((res)=>res.json())
};
export const  SingleUserPage=()=>{
    const {id} = useParams();
    const [userDetail,setUserDetail] = React.useState();
    React.useEffect(()=>{
        getData(`https://reqres.in/api/users/${id}`).then((res)=>
          setUserDetail(res.data)
        );
    },[])
    console.log(userDetail);
    return(
        <>
        <img src={userDetail.avatar} alt="profile-pic" />
        <h1>User : </h1>
        </>
    );
};
