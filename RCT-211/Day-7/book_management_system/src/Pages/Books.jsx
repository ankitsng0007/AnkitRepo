import React from 'react';
import FilterComp from '../Components/FilterComp';
import BookList from '../Components/BookList';
import styled from "styled-components";

function Books() {
  return (
    <div>
      <BookPageWrapper>
      <FilterWraper>
      <FilterComp />
      </FilterWraper>

      <BookWraper>
      <BookList />
      </BookWraper>
      </BookPageWrapper>
    </div>
  );
}

const BookPageWrapper = styled.div`
display: flex;
border: 1px solid red;
`;
const FilterWraper =styled.div`
width: 300px;
border: 2px solid blue;
`;
const BookWraper= styled.div`
width : 100%;
display:grid;
grid-template-columns: repeat(auto-fit,minmax(300px,max-content));
grid-gap: 10px;
`;
export default Books;
