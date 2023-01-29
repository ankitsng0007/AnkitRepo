import logo from './logo.svg';
import './App.css';
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Navbar } from './Component/Navbar';
import { Product } from './Component/Products';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>React Routing</h1>
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/about'} element={<About/>}></Route>
        <Route path={'/Product/:id'} element={<Product/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
