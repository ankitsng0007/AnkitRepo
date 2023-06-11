import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';

function SingleBook() {
  const {id} = useParams();
  const books = useSelector((store)=>store.AppReducer.books);
  const [currentBook,setCurrentBook] = useState({});

  useEffect(()=>{
    if(id){
      const book = books.find((item)=>item.id ===Number(id));
      console.log(book);
    }
  },[])
  return (
    <div>
      
    </div>
  );
}

export default SingleBook;
