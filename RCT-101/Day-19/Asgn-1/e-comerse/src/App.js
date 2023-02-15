import logo from './logo.svg';
import './App.css';
import { Listing } from './Component/Listing';
import { theme } from './Theme/Theme.config';
import { RoutePage } from './Routes/RoutePage';

function App() {
  return (
    <div className="App">
      <h1>E-Comerse</h1>
      <RoutePage />
    </div>
  );
}

export default App;
