import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/AuthData/action';

function LogIn() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password}))
      .then((r)=>{
        //do something
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Email</label>
          <input 
          type='email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label>Enter Password</label>
          <input 
          type='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button>Log In</button>
      </form>
    </div>
  );
}

export default LogIn;
