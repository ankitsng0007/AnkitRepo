import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom";
import { Home } from './Pages/Home';
import { Example } from './Pages/Example';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/dashboard' element={<Example/>}></Route>
    </Routes>
    </>
  );
}

export default App;
