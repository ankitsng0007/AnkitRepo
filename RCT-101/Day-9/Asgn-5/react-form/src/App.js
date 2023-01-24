import logo from './logo.svg';
import './App.css';
import {useState} from "react";
const initState={
  name:"",
  email:"",
  country:"",
  isMarried:"",
  gender:""
};

function App() {
  const [formData,setFormData] = useState(initState);
  const {name,isMarried,email,country,gender}=formData;
  return (
     <div className="App">
      <h1>React Form</h1>
      <form onSubmit={()=>{}}>
        <label>
          Name: 
          <input type="text" name="name" value={name}
          placeholder="Enter Name"/>
        </label>
        <br/>
        <br/>
        <label>
          Email: 
          <input type="email" name="Email" value={email}
          placeholder="Enter Email"/>
        </label>
        <br/>
        <br/>
        <label>
          Country: 
          <input type="text" name="country" value={country}
          placeholder="Enter Country"/>
        </label>
        <br/>
        <br/>
        <label>
          Gender: 
          <select>
          <option value={M}>Male</option>
          <option value={F}>Female</option>
          <option value={O}>Other</option>
          </select>
        </label>
        <br/>
        <br/>
        <label>
          IsMarried: 
          <input type="checkbox" name="isMarried" value={isMarried}/>
        </label>
        <br/>
        <br/>
         
          <input type="submit" />
        <br/>
        <br/>
      </form>
     </div>
  );
}

export default App;
