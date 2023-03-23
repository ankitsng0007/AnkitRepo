import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import Todo from './Component/Todo';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((store)=>store.AuthReducer.isAuth)
  return (
    <div>
      <Counter/>
      {isAuth && <Todo/>}
    </div>
  );
}

export default App;
