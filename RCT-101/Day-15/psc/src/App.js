import logo from './logo.svg';
import './App.css';
import { Navbar } from './Pages/Navbar';
import { AllRoutes } from './Context/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
