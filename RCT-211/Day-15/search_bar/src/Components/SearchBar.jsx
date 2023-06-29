import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const SearchBar = ({suggestions,qureyHandler}) => {
    const [inputText,setInputText] = useState("");
    const [active,setActive] = useState(0); 


    const handleInputTextChange = (e) =>{
        setInputText(e.target.value);
    }
    const handleActieSuggestions = (e)=>{
        console.log(e.keyCode);
    }
    useEffect(()=>{
        qureyHandler(inputText);
    },[inputText,qureyHandler]);
    console.log(active);
  return (
        <Wrapper onKeyUp={handleActieSuggestions}>
        <SearchBarWrapper>
      <input value={inputText} onChange={handleInputTextChange}/>
        </SearchBarWrapper>

        <SuggestionBox len={5} active={active}>
            {suggestions.map((item,index) => {
                return (
                    <div 
                key={index} 
                onMouseOver={()=>{ 
                setActive(index+1);
                }}>{item}</div>
            );
            })}
        </SuggestionBox>
        </Wrapper>
  );
};

const SuggestionBox = styled.div`
border:1px solid black;
display:flex;
flex-direction:column;
//max-height:200px;
max-height: ${({len}) => `${len*38.66}px`};
//border-top-color: ${({len})=>(len ? "transparent" : "black")};

margin:auto;
overflow:auto;
& *{
    flex:1;
    text-align:left;
    padding:10px;
    padding-left:30px;
}
& :nth-child(${({active})=>active}){
    background: rgba(0, 0, 0, 0.09);
    cursor: pointer;
}
`;
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
