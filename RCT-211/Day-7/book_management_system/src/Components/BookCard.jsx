import React from 'react';

const BookCard = ({bookData}) => {
  return (
    <div>
      <div>
        <img src='' 
        alt='Book Cover'
        width="100%"/>
      </div>
      <div>{bookData.book_name}</div>
      <div>{bookData.category}</div>
      <div>{bookData.release_year}</div>
    </div>
  );
}

export default BookCard;
