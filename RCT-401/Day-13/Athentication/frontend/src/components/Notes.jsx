import React, { useEffect, useState } from 'react';

const Notes = () => {
    const [notes,setNotes] = useState("")

    useEffect(()=>{
        fetch("http://localhost:8080/notes",{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            setNotes(res)
        })
        .catch(err=>console.log(err))
    },[])

    const DeleteNote=(noteId)=>{
        fetch(`http://localhost:8080/notes/delete/${noteId}`,{
            method:"DELETE",
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
    }

  return (
    <>
      <h1>All Notes</h1>
      {notes?notes.map((ele)=>{
        return(
            <>
            <h2>Title:{ele.title}</h2>
            <p>Note:{ele.note}</p>
            <button onClick={()=>DeleteNote(ele._id)}>Delete</button>
            </>
        )
      }):<h1>No Notes are available</h1>}
    </>
  );
}

export {Notes} ;
