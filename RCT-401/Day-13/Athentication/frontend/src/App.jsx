import './App.css';
import {Route,Routes} from "react-router-dom";
import {Register} from "./components/Register"
import { Login } from './components/Login';
import { CreateNote } from './components/CreateNote';
import {Notes} from './components/Notes';


function App() {
  return (
    <div className="App">
      <h1>Note App</h1>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/createnote' element={<CreateNote/>}></Route>
        <Route path='/notes' element={<Notes/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
