import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getBooks } from '../Redux/AppData/action';

function EditBook() {
  const {id} = useParams();
  const books = useSelector((store)=>store.AppReducer.books);
  const [currentBook,setCurrentBook] = useState({});
  const dispatch = useDispatch();

  //fetching the data -> get all the books.
  useEffect(()=>{
    if(books.length === 0){
      dispatch(getBooks());
    }
  },[books.length, dispatch]);

  //get the data from the redux store.
  //find the book from the list of book.
  

  return (
    <div>
      
    </div>
  );
}

export default EditBook;
