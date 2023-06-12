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
  },[id,books]);
  return (
    <div>
      <h2>SingleBook</h2>
      <div>Book Name :- {currentBook.book_name}</div>
      <div>Author :- {currentBook.author}</div>
      <div>Category :- {currentBook.category}</div>
      <div>Release Year :- {currentBook.release_year}</div>
      <div>No Of Chapters :- {currentBook.no_of_chapters}</div>
    </div>
  );
}

export default SingleBook;
