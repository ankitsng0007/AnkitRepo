import logo from './logo.svg';
import './App.css';
import {useState} from "react";
const initstate={
  username:"",
  email:"",
  password:"",
  country:"",
  maritalStatus:false
};
function App() {
  const [formData,setFormData]=useState(initstate);
  const [users,setUsers]=useState([]);

  const handleChange=(e)=>{
   // console.log(e.target.name)
   //console.log(e.target.value)
   const value=
   e.target.type==="checkbox"?e.target.checked : e.target.value
    setFormData({...formData,[e.target.name]:value})
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
    setUsers([...users,formData]);
    console.log(users);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
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
        <br/>
        <br/>
        <label>
          Marital Status :
          <input 
          type="checkbox"
          name='maritalStatus'
          value={formData.maritalStatus}
          onChange={handleChange}
          />
        </label>
        <br/>
        <br/>
        <input
        type="submit"/>
      </form>
      <br/>
      <br/>
      {users.map((el)=>
        <li key={el.username}>{el.username}</li>
      )}
    </div>
  );
}

export default App;
