import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const SearchBar = ({suggestions,qureyHandler}) => {
    const [inputText,setInputText] = useState("");

    const handleInputTextChange = (e) =>{
        setInputText(e.target.value);
    }
    useEffect(()=>{
        qureyHandler(inputText);
    },[inputText,qureyHandler])
  return (
    <div>
        <Wrapper>
        <SearchBarWrapper>
      <input value={inputText} onChange={handleInputTextChange}/>
        </SearchBarWrapper>

        <SuggestionBox>
            {suggestions.map((item,index)=>{
                return <div key={index}>{item}</div>;
            })}
        </SuggestionBox>
        </Wrapper>
    </div>
  );
};

const SuggestionBox = styled.div``;
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
const Wrapper = styled.div`
max-width:400px;
margin:auto;
`;
export default SearchBar;
