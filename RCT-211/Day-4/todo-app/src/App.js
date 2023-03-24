import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import Todo from './Component/Todo';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
  const isAuth = useSelector((store)=>store.AuthReducer.isAuth)
  const [userEmail,setUserEmail] = useState("");
  const [password,setPassword] = useState("");
  return (
    <div className='App'>
      <Counter/>
      <br/>
      <div>
        <input type="email"
        placeholder='Enter Email'
        value={userEmail}
        onChange={(e)=>{e.target.value}} />
        <input type="password"
        placeholder='Enter Password'
        value={password}
        onChange={(e)=>{e.target.value}} />
        <button>Log In</button>
      </div>
      {isAuth && <Todo/>}
    </div>
  );
}

export default App;
