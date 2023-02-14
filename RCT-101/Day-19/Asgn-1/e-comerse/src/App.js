import logo from './logo.svg';
import './App.css';
import { Listing } from './Component/Listing';
import { theme } from './Theme/Theme.config';

function App() {
  return (
    <div className="App">
      <h1>E-Comerse</h1>
      <Listing theme={theme}/>
    </div>
  );
}

export default App;
