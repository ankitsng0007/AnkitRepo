import logo from './logo.svg';
import './App.css';
import useTimeout from './Hooks/useTimeout';
import TimeoutComp from './Components/TimeoutComp';

function App() {
  const showText = useTimeout();

  return (
    <div className="App">
  <h1>App Component</h1>
  <TimeoutComp/>  
    </div>
  );
}

export default App;
