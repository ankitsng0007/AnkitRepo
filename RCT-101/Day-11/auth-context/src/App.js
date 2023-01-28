import logo from './logo.svg';
import './App.css';
import Form from "./Component/Form";
import Status from './Component/Status';
import LogInForm from './Component/LogInForm';

function App() {
  const onSubmit=(e)=>{
    e.preventDefault();
    alert("Trying To Submit");
  };
  return (
    <div className="App">
        <h1>Auth Context</h1>
        <LogInForm/>
        <Status/>
    </div>
  );
}
export default App;