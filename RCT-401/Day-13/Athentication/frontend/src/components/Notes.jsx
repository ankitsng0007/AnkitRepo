import React, { useEffect } from 'react';

const Notes = () => {
    useEffect(()=>{
        fetch("http://localhost:8080/notes",{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        }).then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.log(err))
    },[])

  return (
    <div>
      <h1>All Notes are in Console</h1>
    </div>
  );
}

export {Notes} ;
