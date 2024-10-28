import './App.css';
import Mainpage from './component/Mainpage';
import { Routes,Route } from 'react-router-dom';
import Mealinfo from './component/Mealinfo';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Mainpage/>}/>
    <Route path='/:mealid' element={<Mealinfo/>}/>
    </Routes>
  );
}

export default App;
