import React from 'react';

const BookCard = ({bookData}) => {
  return (
    <div>
      <div>
        <img src='data:image/jpeg;base64,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'
        alt='Book Cover'
        width="100%" />
      </div>
      <div>{bookData.book_name}</div>
      <div>{bookData.category}</div>
      <div>{bookData.release_year}</div>
    </div>
  );
}

export default BookCard;
