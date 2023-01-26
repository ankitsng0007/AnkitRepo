import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './Component/ThemeContextProvider';

const style={
  light:{
    color:"black",
    background:"#cecece",
    padding:"50px"
},
dark:{
  color:"white",
  background:"black",
  padding:"50px"
}
}
function App() {
  const value = useContext(ThemeContext);
  console.log(value);
  return (
    <div className="App"
    style={value.theme==="dark" ? style.dark:style.light}>
        <h1>Theme is {value.theme}</h1>
        <h3>To See The Magic Click on Button</h3>
        <button onClick={value.toggleTheme}>Change Theme</button>
    </div>
  );
}

export default App;
