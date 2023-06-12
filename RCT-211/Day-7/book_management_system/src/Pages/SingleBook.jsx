import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function SingleBook() {
  const {id} = useParams();
  //console.log("id",id);
  const books = useSelector((store)=>store.AppReducer.books);
  const [currentBook,setCurrentBook] = useState({});
  //console.log(books)
  useEffect(()=>{
    if(id){
      const book = books.find((item)=>item.id === Number(id));
      console.log(book);
      book && setCurrentBook(book);
    }
  },[id]);
  return (
    <div>
      <h3>SingleBook</h3>
    </div>
  );
}

export default SingleBook;
