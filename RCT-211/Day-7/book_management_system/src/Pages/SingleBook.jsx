import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';

function SingleBook() {
  const {id} = useParams();
  const books = useSelector((store)=>store.AppReducer.books);
  const [currentBook,setCurrentBook] = useState({});
  return (
    <div>
      
    </div>
  );
}

export default SingleBook;
