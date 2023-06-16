import logo from './logo.svg';
import './App.css';
import useTimeout from './Hooks/useTimeout';

function App() {
  const showText = useTimeout();

  return (
    <div className="App">
  {showText && <h1>App Component</h1>}    
    </div>
  );
}

export default App;
