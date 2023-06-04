import React, { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux";
import {getBooks} from "../Redux/action";
import BookCard from './BookCard';
import styled from 'styled-components';

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
      books.map(item => {
        return (
          <BookCardWrraper key={item.id}>
        <BookCard bookData={item} />
        </BookCardWrraper>);
      })}
    </div>);
};
const BookCardWrraper = styled.div`
width:300px;
`;
export default BookList;
