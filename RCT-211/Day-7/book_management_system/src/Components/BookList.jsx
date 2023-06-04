import React, { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux";
import {getBooks} from "../Redux/action";
import BookCard from './BookCard';

const BookList = () => {
  const books = useSelector((store)=>store.books);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    //if i don't ave any books in redux then make the API call
    if(books.length===0){
      dispatch(getBooks());
    }
  },[books.length,dispatch]);
  return (
    <div>
      {books.length > 0 &&
      books.map(singleBook => {
        return (
        <BookCard bookData={singleBook} />);
      })}
    </div>);
};

export default BookList;
