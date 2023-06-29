import React, { useState } from 'react';
import styled from "styled-components";

const SearchBar = ({setQurey}) => {
    const [inputText,setInputText] = useState("");

    const handleInputTextChange = (e) =>{
        setInputText(e.target.value);
    }
  return (
    <div>
        <wrapper>
        <SearchBarWrapper>
      <input value={inputText} onChange={handleInputTextChange}/>
        </SearchBarWrapper>
        </wrapper>
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
const wrapper = styled.div`
max-width:400px;
margin:auto;
`;
export default SearchBar;
