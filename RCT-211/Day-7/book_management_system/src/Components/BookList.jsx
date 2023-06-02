import React, { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux";
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
      BookList
    </div>
  );
}

export default BookList;
