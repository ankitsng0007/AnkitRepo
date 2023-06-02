import React, { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux";
function BookList() {
  const books = useSelector((store)=>store.books);
  const dispatch = useDispatch();
  useEffect(()=>{

  },[]);
  return (
    <div>
      BookList
    </div>
  );
}

export default BookList;
