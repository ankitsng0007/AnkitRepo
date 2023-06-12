import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getBooks } from '../Redux/AppData/action';

function EditBook() {
  const {id} = useParams();
  const books = useSelector((store)=>store.AppReducer.books);
  const [currentBook,setCurrentBook] = useState({});
  const dispatch = useDispatch();
  const [title,setTitle] = useState("");

  //fetching the data -> get all the books.
  useEffect(()=>{
    if(books.length === 0){
      dispatch(getBooks());
    }
  },[books.length, dispatch]);

  //get the data from the redux store.
  //find the book from the list of book.
  useEffect(()=>{
    if(id){
      const book = books.find((item)=>item.id === Number(id));
      console.log(book);
      book && setCurrentBook(book);
      book && setTitle(book.book_name);
    }
  },[id,books]);
  console.log("in Edit Page",currentBook);


  return (
    <div>
      <h2>Edit Book</h2>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div>
        <label>Author</label>
        <input />
      </div>
    </div>
  );
}

export default EditBook;
