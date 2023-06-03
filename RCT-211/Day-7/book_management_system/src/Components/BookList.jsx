import React, { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux";
import {getBooks} from "../Redux/action";
function BookList() {
  const books = useSelector((store)=>store.books);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(books.length===0){
      dispatch(getBooks());
    }
  },[books.length,dispatch]);
  return (
    <div>
      {books.length > 0 &&
      books.map((singleBook)=>{
        return 
        <BookCard bookData={singleBook} />;
      })}
    </div>
  );
}

export default BookList;
