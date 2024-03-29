import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/AuthData/action';
import { useLocation, useNavigate } from 'react-router';

function LogIn() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location in login page",location);

  const comingFrom = location.state?.data || "/";

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password}))
      .then((r)=>{
        //do something
        navigate(comingFrom);
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
