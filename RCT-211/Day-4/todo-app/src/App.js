import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import Todo from './Component/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
  const isAuth = useSelector((store)=>store.AuthReducer.isAuth)
  const [userEmail,setUserEmail] = useState("");
  const [userPassword,setUserPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin=()=>{
    if(userEmail){
      const payload={
        email:userEmail,
        password:userPassword
      }
    }
  }
  return (
    <div className='App'>
      <Counter/>
      <br/>
      <div>
        <input type="email"
        placeholder='Enter Email'
        value={userEmail}
        onChange={(e)=>setUserEmail(e.target.value)} />
        <input type="password"
        placeholder='Enter Password'
        value={userPassword}
        onChange={(e)=>setUserPassword(e.target.value)} />
        <button onClick={handleLogin}>Log In</button>
      </div>
      {isAuth && <Todo/>}
    </div>
  );
}

export default App;
