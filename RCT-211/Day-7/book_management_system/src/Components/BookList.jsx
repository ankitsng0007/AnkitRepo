import React, { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux";
import {getBooks} from "../Redux/action";
import BookCard from './BookCard';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const BookList = () => {
  const books = useSelector((store)=>store.books);
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  
  useEffect(()=>{
    //if i don't ave any books in redux then make the API call
    if(location || books.length===0){
      const sortBy = searchParams.get("sort");
      const getBooksParams = {
        params : {
          category:searchParams.getAll("category"),
          _sort: sortBy && "release_year",
          _order: sortBy,
        },
      };
      dispatch(getBooks(getBooksParams));
    }
  //},[books.length,dispatch, location.search]);
  },[location.search]);
  return (
    <>
      {books.length > 0 &&
      books.map(item => {
        return (
          <BookCardWrraper key={item.id}>
        <BookCard bookData={item} />
        </BookCardWrraper>);
      })}
    </>);
};
const BookCardWrraper = styled.div`
width:300px;
`;
export default BookList;
