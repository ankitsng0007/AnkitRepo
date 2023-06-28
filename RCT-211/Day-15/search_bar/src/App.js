import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import { useState } from 'react';

function App() {
  const [qurey,setQurey] = useState("");
  return (
    <div className="App">
      <h1>Search Bar</h1>
      <h3>Search Qurey : {qurey}</h3>
      <SearchBar setQurey={setQurey} />
    </div>
  );
}

export default App;
