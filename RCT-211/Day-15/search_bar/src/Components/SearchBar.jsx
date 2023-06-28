import React from 'react';
import styled from "styled-components";

const SearchBar = ({setQurey}) => {
  return (
    <div>
        <SearchBarWrapper>
      <input />
        </SearchBarWrapper>
    </div>
  );
}

const SearchBarWrapper = styled.div`
border:1px solid red;
display:flex;
padding:5px 10px;
align-items:center;
`;
const Input = styled.input`
border:none;
outline:none;
font-size:20px;
flex:1;
`;
export default SearchBar;
