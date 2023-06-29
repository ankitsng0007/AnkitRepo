import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import { useCallback, useEffect, useState } from 'react';
import countries from './utils/countries';

function App() {
  const [qurey,setQurey] = useState("");
  const [suggestions,setSuggestions] = useState([]);

  const qureyHandler = useCallback((val)=>{
    setQurey(val);
  },[]);
  
  //filtering the countries based on the value entered in the input box.
  useEffect(()=>{
    if(qurey === ""){
      setSuggestions([]);
    }else{
      let newSuggestions = countries.filter((item)=>{
        return item.country.toLowerCase().indexOf(qurey) !== -1 ? true : false;
      })
      //console.log(newSuggestions);
      .map((item)=>item.country);
      setSuggestions(newSuggestions);
    }
  },[qurey]);
  return (
    <div className="App">
      <h1>Search Bar</h1>
      <h3>Search Qurey : {qurey}</h3>
      <SearchBar suggestions={suggestions} qureyHandler={qureyHandler} />
    </div>
  );
}

export default App;
