import React, { useState } from 'react';

function LogIn() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return (
    <div>
      <form>
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
