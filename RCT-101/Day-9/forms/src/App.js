import logo from './logo.svg';
import './App.css';
import {useState} from "react";
const initstate={
  username:"",
  email:"",
  password:"",
  country:""
};
function App() {
  const [formData,setFormData]=useState(initstate);

  const handleChange=(e)=>{
   // console.log(e.target.name)
   //console.log(e.target.value)
    setFormData({...formData,[e.target.name]:e.target.value})
  };
  console.log(formData);
  return (
    <div className="App">
      <form>
        <h1>Forms</h1>
        <label>Username : 
          <input placeholder='Enter Name'
          name='username'
          type="text"
          value={formData.username}
          onChange={handleChange}/>
        </label>
        <br/>
        <br/>
        <label>Email : 
          <input placeholder='Enter Email'
          name='email'
          type="email"
          value={formData.email}
          onChange={handleChange}/>
        </label>
        <br/>
        <br/>
        <label>password : 
          <input placeholder='Enter Password'
          name='password'
          type="password"
          value={formData.password}
          onChange={handleChange}/>
        </label>
        <br/>
        <br/>
        <label>Country : 
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="india">INDIA</option>
            <option value="china">CHINA</option>
            <option value="usa">USA</option>
            <option value="canada">CANADA</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default App;
