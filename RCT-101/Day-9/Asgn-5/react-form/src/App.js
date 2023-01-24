import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";
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
  const fileRef=useRef();
  const handleChange= (e)=>{
    let {name,value,checked,type}=e.target;
    value=type==="checkbox"?checked : value;
    setFormData((prev)=>({...prev,[name]:value}))
  }
  const onSubmit = (e)=>{
    e.preventDefault();
    console.log(formData);
    console.log(fileRef.current.files[0])
  }
  return (
     <div className="App">
      <h1>React Form</h1>
      <form onSubmit={()=>{}}>
        <label>
          Name: 
          <input onChange={handleChange} type="text" name="name" value={name}
          placeholder="Enter Name"/>
        </label>
        <br/>
        <br/>
        <label>
          Email: 
          <input onChange={handleChange} type="email" name="email" value={email}
          placeholder="Enter Email"/>
        </label>
        <br/>
        <br/>
        <label>
          Country: 
          <input onChange={handleChange} type="text" name="country" value={country}
          placeholder="Enter Country"/>
        </label>
        <br/>
        <br/>
        <label>
          Gender: 
          <select value={gender} onChange={handleChange}>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
          </select>
        </label>
        <br/>
        <br/>
        <label>
          IsMarried: 
          <input onChange={handleChange} type="checkbox" name="isMarried" value={isMarried}/>
        </label>
        <br/>
        <br/>
        <label>
          Photo: 
          <input type="file" ref={fileRef}/>
        </label>
        <br/><br/>
        <input type="submit"/>
      </form>
     </div>
  );
}

export default App;
