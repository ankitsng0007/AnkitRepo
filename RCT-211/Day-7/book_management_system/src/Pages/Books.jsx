import React from 'react';
import FilterComp from '../Components/FilterComp';
import BookList from '../Components/BookList';

function Books() {
  return (
    <div>
      <FilterComp />
      <BookList />
    </div>
  );
}

export default Books;
